import { useNavigation } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { Text, useColorScheme, View, TouchableOpacity } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { BogeFieldValueType, BogeFormSelectField } from '../../../types'
import { TableListCellCustomComponentProps } from '../../TableListTypes'
import { useEditableCell } from '../../editable/EditableContext'

export function CellFormSelectComponent(
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
  const { navigate } = useNavigation<any>()

  const { value, multiline, updateField } =
    useEditableCell<BogeFormSelectField>()

  const [selected, setSelected] = useState<any[]>(
    Array.isArray(value) ? value : typeof value === 'string' ? [value] : []
  )

  const dispatch = useCallback((type, item) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(item.id)) {
        return prevSelected.filter((item2) => item2 !== item.id)
      } else {
        return prevSelected.concat(item.id)
      }
    })
  }, [])

  useEffect(() => {
    updateField({ value: selected[0] })
  }, [updateField, selected])

  return (
    <View
      style={{
        flex: 1,
        flexDirection: multiline ? 'column' : 'row',
        alignItems: multiline ? 'flex-start' : 'center',
      }}
    >
      <Text style={{ color: PlatformColor('label') }}>{item.title}</Text>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() =>
          navigate('Modal', {
            screen: 'FormListSelect',
          })
        }
      >
        <Text
          style={{
            color: PlatformColor('systemGray2'),
            textAlign: 'right',
            paddingHorizontal: 10,
          }}
        >
          请选择
        </Text>
      </TouchableOpacity>
    </View>
  )
}
