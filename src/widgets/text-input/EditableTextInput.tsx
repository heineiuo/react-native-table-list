import { useCallback } from 'react'
import { Platform, Text, TextInput, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { BogeFieldValueType, BogeTextInputField } from '../../../types'
import { TableListCellCustomComponentProps } from '../../TableListTypes'
import { useEditableCell } from '../../editable/EditableContext'

export function CellTextInputComponent(
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
  const {
    disabled,
    value,
    multiline,
    numberOfLines = 1,
    updateField,
    readOnly,
  } = useEditableCell<BogeTextInputField>()

  const onTextInputLayout = useCallback(
    (e) => {
      const next = e.nativeEvent.contentSize.height / 18
      updateField({ numberOfLines: next })
    },
    [updateField]
  )

  const interValue = typeof value === 'string' ? value : ''

  const textAlign = multiline ? 'left' : 'right'

  return (
    <View
      style={{
        flex: 1,
        flexDirection: multiline ? 'column' : 'row',
        alignItems: multiline ? 'flex-start' : 'center',
      }}
    >
      <Text style={{ color: PlatformColor('label') }}>{item.title}</Text>
      <TextInput
        textAlign={textAlign}
        placeholder={item.subtitle}
        clearButtonMode="while-editing"
        value={interValue}
        onChangeText={(value) => {
          updateField({ value })
        }}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onContentSizeChange={onTextInputLayout}
        editable={!readOnly && !disabled}
        style={[
          {
            flex: 1,
            display: 'flex',
            paddingLeft: 10,
            paddingRight: 10,
            textAlign,
            color: PlatformColor('label'),
            backgroundColor: PlatformColor('secondarySystemGroupedBackground'),
          },
          {
            ...Platform.select({
              web: {
                outline: 0,
              },
            }),
          } as any,
        ]}
      />
    </View>
  )
}
