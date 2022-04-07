import { CellFormSelectComponent } from './form-select/EditableFormSelect'
import { CellImagePickerComponent } from './image-picker/EditableImagePicker'
import { CellNumberInputComponent } from './number-input/EditableNumberInput'
import { CellSwitchComponent } from './switch/EditableSwitch'
import { CellTextInputComponent } from './text-input/EditableTextInput'
import { CellValueSetComponent } from './value-set/EditableValueSet'

export const WidgetMap = {
  TextInput: CellTextInputComponent,
  NumberInput: CellNumberInputComponent,
  Switch: CellSwitchComponent,
  ValueSet: CellValueSetComponent,
  FormSelect: CellFormSelectComponent,
  ImagePicker: CellImagePickerComponent,
} as const

export type WidgetNames = keyof typeof WidgetMap
