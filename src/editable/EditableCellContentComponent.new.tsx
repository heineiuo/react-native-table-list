import { ReactComponentLike } from 'prop-types'
import { useContext, useMemo } from 'react'
import { ListRenderItemInfo } from 'react-native'

import { BogeField } from '../boge'
import { CellFormSelectComponent } from '../widgets/form-select/EditableFormSelect'
import { CellImagePickerComponent } from '../widgets/image-picker/EditableImagePicker'
import { CellNumberInputComponent } from '../widgets/number-input/EditableNumberInput'
import { CellSwitchComponent } from '../widgets/switch/EditableSwitch'
import { CellTextInputComponent } from '../widgets/text-input/EditableTextInput'
import { CellValueSetComponent } from '../widgets/value-set/EditableValueSet'
import { EditableCellContext, EditableContext } from './EditableContext'

export const WidgetMap = {
  TextInput: CellTextInputComponent,
  NumberInput: CellNumberInputComponent,
  Switch: CellSwitchComponent,
  ValueSet: CellValueSetComponent,
  FormSelect: CellFormSelectComponent,
  ImagePicker: CellImagePickerComponent,
} as const

function FallbackComponent() {
  return null
}

export function EditableCellContentComponent<ItemT = any>(
  props: ListRenderItemInfo<ItemT>
) {
  const { fields, dispatchField } = useContext(EditableContext)

  const item = props.item as any
  const { fieldId } = item
  const widgetName = item.widgetName as keyof typeof WidgetMap
  let Component: ReactComponentLike = FallbackComponent

  if (widgetName && widgetName in WidgetMap) {
    Component = WidgetMap[widgetName]
  }

  const field = useMemo(() => {
    const field = fields.find((item) => item.fieldId === fieldId)
    if (!field) {
      throw new Error(`Field not found id=${fieldId}`)
    }
    const updateField = (partialField: any) => {
      const payload = {
        ...field,
        ...partialField,
      } as BogeField

      dispatchField({
        type: 'update',
        payload,
      })
    }

    return { ...field, updateField }
  }, [fieldId, dispatchField, fields])

  return (
    <EditableCellContext.Provider value={field}>
      <Component {...props} />
    </EditableCellContext.Provider>
  )
}
