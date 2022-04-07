import { Image, ListRenderItemInfo, View } from 'react-native'

import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from '../constants'

export function DefaultCellImageComponent<ItemT>(
  props: ListRenderItemInfo<ItemT>
): JSX.Element {
  const item = props.item as any
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
