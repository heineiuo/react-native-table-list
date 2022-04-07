import { Image, View } from 'react-native'

import { TableListCellCustomComponentProps } from '../TableListTypes'
import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from '../constants'

export function DefaultCellImageComponent(
  props: TableListCellCustomComponentProps<any, any>
): JSX.Element {
  const { item } = props
  const { image } = item
  let imageElement = null

  if (image) {
    if (typeof image === 'object' && 'type' in image) {
      imageElement = image
    } else {
      imageElement = <Image source={image} style={{ width: 30, height: 30 }} />
    }
  }
  return (
    <View
      style={{
        width: image ? IMAGE_COMPONENT_WIDTH : IMAGE_GAP * 2,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {imageElement}
    </View>
  )
}
