import gql from 'gql-tag'
import { useCallback, useEffect, useState } from 'react'
import { Text, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { useApp } from '../../../contexts/AppContext'
import { useGraphQL } from '../../../hooks'
import {
  BogeFieldValueType,
  BogeValueSet,
  BogeValueSetField,
} from '../../../types'
import { TableListCellCustomComponentProps } from '../../TableListTypes'
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
  const { scopeName, appName } = useApp()
  const { value, setName, multiline, updateField } =
    useEditableCell<BogeValueSetField>()
  const graphql = useGraphQL()

  const [loading, setLoading] = useState(true)
  const [options, setOptions] = useState<BogeValueSet[]>([])

  const updateOptions = useCallback(
    async (setName?: string) => {
      try {
        const data = await graphql<{ repo: { valueSet: any[] } }>(
          gql`
            query ($appName: String!, $scopeName: String!, $setName: String) {
              repo(appName: $appName, scopeName: $scopeName) {
                valueSet(value: $setName) {
                  value
                  label
                  description
                }
              }
            }
          `,
          {
            scopeName,
            appName,
            setName,
          }
        )
        setOptions(data.repo.valueSet)
      } catch (e: any) {
        // alert(e.message)
        if (e.name === 'DOMException') {
        } else {
          setLoading(false)
          console.error(e)
        }
      }
    },
    [graphql, scopeName, appName]
  )

  useEffect(() => {
    updateOptions(setName)
  }, [setName, updateOptions])

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
