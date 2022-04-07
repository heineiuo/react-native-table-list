import { useCallback } from 'react'
import { Platform, Text, TextInput, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { BogeFieldValueType, BogeTextInputField } from '../../../types'
import { TableListCellCustomComponentProps } from '../../TableListTypes'
import { useEditableCell } from '../../editable/EditableContext'

export function CellNumberInputComponent(
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
    updateField,
    numberOfLines = 1,
  } = useEditableCell<BogeTextInputField>()

  const onTextInputLayout = useCallback(
    (e) => {
      const next = e.nativeEvent.contentSize.height / 18
      updateField({ numberOfLines: next })
    },
    [updateField]
  )

  const interValue = value === null || typeof value === 'undefined' ? '' : value

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
        keyboardType="numeric"
        onChangeText={(value) => {
          updateField({ value: Number(value) })
        }}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onContentSizeChange={onTextInputLayout}
        editable={!disabled}
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
