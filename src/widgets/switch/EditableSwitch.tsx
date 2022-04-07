import { Switch, Text, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { BogeFieldValueType, BogeSwitchField } from '../../../types'
import { TableListCellCustomComponentProps } from '../../TableListTypes'
import { useEditableCell } from '../../editable/EditableContext'

export function CellSwitchComponent(
  props: TableListCellCustomComponentProps<
    {
      id: string
      valueType: BogeFieldValueType
      required?: boolean
    },
    any
  >
): JSX.Element {
  useColorScheme()
  const { item } = props
  const { value, disabled, readOnly, updateField } =
    useEditableCell<BogeSwitchField>()

  let switchValue = value
  if (typeof switchValue !== 'boolean') {
    switchValue = false
  }

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: PlatformColor('label') }}>{item.title}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Switch
          disabled={disabled || readOnly}
          value={switchValue}
          onValueChange={(value) => updateField({ value })}
        />
      </View>
    </View>
  )
}
