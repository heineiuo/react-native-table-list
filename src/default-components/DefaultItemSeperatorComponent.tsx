import { useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { HorizontalWrapper } from '../HorizontalWrapper'
import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from '../constants'

export function DefaultItemSeperatorComponent(info: any): JSX.Element {
  let paddingLeft = info.leadingItem.image
    ? IMAGE_COMPONENT_WIDTH
    : IMAGE_GAP * 2
  if (typeof info.leadingItem.imageWidth === 'number') {
    paddingLeft = info.leadingItem.imageWidth
  }

  useColorScheme()

  return (
    <HorizontalWrapper>
      <View
        style={{
          height: 1,
          paddingLeft,
          backgroundColor: PlatformColor('secondarySystemGroupedBackground'),
        }}
      >
        <View
          style={{
            height: 1,
            backgroundColor: PlatformColor('tertiarySystemGroupedBackground'),
          }}
        />
      </View>
    </HorizontalWrapper>
  )
}
