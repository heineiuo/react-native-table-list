import { MaterialIcons } from '@expo/vector-icons'
import { useCallback, useEffect, useState } from 'react'
import { Modal, Text, useColorScheme, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Asset, launchImageLibrary } from 'react-native-image-picker'
import { PlatformColor } from 'react-native-platform-color'

import { TableListCellCustomComponentProps } from '../../TableListTypes'
import { BogeFieldValueType, BogeImagePickerField } from '../../boge'
import { useEditableCell } from '../../editable/EditableContext'
import { ImagePickerItem } from './ImagePickerItem'

export function CellImagePickerComponent(
  props: { upload: any } & TableListCellCustomComponentProps<
    {
      id: string
      valueType: BogeFieldValueType
      required?: boolean
      upload: any
    },
    any
  >
): JSX.Element {
  useColorScheme()
  const { upload, item } = props
  const { value, readOnly, updateField } =
    useEditableCell<BogeImagePickerField>()
  const [list, setList] = useState<
    (Asset & Pick<Required<Asset>, 'uri'> & { remoteUri?: string })[]
  >(value || [])

  const onUpload = useCallback((asset1, asset2) => {
    const { remoteUri } = asset2
    setList((prev) => {
      return prev.map((item) => {
        if (item.uri === asset1.uri) {
          return {
            ...item,
            remoteUri,
          }
        }
        return item
      })
    })
  }, [])

  const onPress = useCallback(() => {
    launchImageLibrary({ selectionLimit: 1, mediaType: 'photo' }, (res) => {
      console.log('res', res)
      const { assets } = res
      if (res.didCancel) {
        return
      }
      if (res.errorCode) {
        return
      }

      if (assets) {
        const assets2 = assets.map((item) => {
          return {
            ...item,
            // remoteUri: item.uri,
          }
        })
        setList((prev: any) => {
          return [...prev, ...assets2]
        })
      }
    })
  }, [])

  useEffect(() => {
    const value = list.filter((item) => !!item.remoteUri) as any
    updateField({ value })
  }, [list])

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {!readOnly && (
            <TouchableOpacity
              onPress={onPress}
              style={{
                width: 80,
                height: 80,
                margin: 8,
                borderRadius: 10,
                borderWidth: 2,
                borderStyle: 'dashed',
                borderColor: PlatformColor('systemBlue'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MaterialIcons name="add" color={PlatformColor('systemBlue')} />
            </TouchableOpacity>
          )}
          {list.map((item) => {
            return (
              <ImagePickerItem
                upload={upload}
                onUpload={(asset) => onUpload(item, asset)}
                style={{
                  width: 80,
                  height: 80,
                  margin: 8,
                }}
                key={item.uri}
                {...item}
              />
            )
          })}
        </View>
      </View>
    </>
  )
}
