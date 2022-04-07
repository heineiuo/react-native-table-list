import gql from 'gql-tag'
import { useCallback, useEffect, useState } from 'react'
import { Text, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { TableListCellCustomComponentProps } from '../../TableListTypes'
import { BogeFieldValueType, BogeValueSet, BogeValueSetField } from '../../boge'
import { useEditableCell } from '../../editable/EditableContext'

export function CellValueSetComponent(
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
  const { value, setName, multiline, updateField } =
    useEditableCell<BogeValueSetField>()

  const [loading, setLoading] = useState(true)
  const [options, setOptions] = useState<BogeValueSet[]>([])

  useEffect(() => {}, [setName])

  return (
    <View
      style={{
        flex: 1,
        flexDirection: multiline ? 'column' : 'row',
        alignItems: multiline ? 'flex-start' : 'center',
      }}
    >
      <Text style={{ color: PlatformColor('label') }}>{item.title}</Text>
    </View>
  )
}
