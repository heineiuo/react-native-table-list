import { useEffect, useState } from 'react'
import {
  Image,
  Platform,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Asset } from 'react-native-image-picker'
import { PlatformColor } from 'react-native-platform-color'

import { useApp } from '../../../contexts/AppContext'
import { useUpload } from '../../../hooks'

export function ImagePickerItem(
  props: Asset &
    Pick<Required<Asset>, 'uri'> & {
      remoteUri?: string
      onUpload?: (asset: { remoteUri: string }) => void
      style?: StyleProp<ViewStyle>
    }
) {
  const { uri, style, onUpload, fileName, type } = props
  const upload = useUpload()
  const { appId } = useApp()
  const [error, setError] = useState<Error>()
  const [remoteUri, setRemoteUri] = useState(props.remoteUri)
  const [progress, setProgress] = useState(props.remoteUri ? 1 : 0)
  const [previewUri] = useState(props.remoteUri ?? props.uri)

  useEffect(() => {
    if (remoteUri) {
      return
    }
    const uploadTarget = upload(uri, {
      // ownerType: 'app',
      // ownerId: appId,
      // filename: fileName,
    })

    const remove1 = uploadTarget.addListener('progress', (event) => {
      setProgress(event.loaded / event.total)
    })
    const remove2 = uploadTarget.addListener('success', (event) => {
      const remoteUri = event.result.url
      setProgress(1)
      setRemoteUri(remoteUri)
      if (onUpload) {
        onUpload({ remoteUri })
      }
    })
    const remove3 = uploadTarget.addListener('error', (event) => {
      setProgress(1)
      setError(event.result)
    })

    return () => {
      remove1()
      remove2()
      remove3()
    }
  }, [uri, remoteUri, appId, fileName, upload, onUpload])

  return (
    <TouchableOpacity
      onPress={() => {
        if (Platform.OS === 'web') {
          window.open(previewUri)
        }
      }}
      style={[
        {
          backgroundColor: PlatformColor('secondarySystemBackground'),
          borderRadius: 20,
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <Image
        source={{ uri: previewUri }}
        style={{ width: '100%', height: '100%' }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: PlatformColor('darkText'),
          bottom: 4,
          left: 8,
          right: 8,
          height: 16,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: PlatformColor('lightText') }}>{progress}</Text>
      </View>
    </TouchableOpacity>
  )
}
