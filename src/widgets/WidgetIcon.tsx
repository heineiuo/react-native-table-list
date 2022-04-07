import { Text, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { getPlatformColorFromString } from '../getPlatformColorFormString'

export function WidgetIcon(props: { widgetName: string }) {
  useColorScheme()
  const { widgetName = 'U' } = props
  return (
    <View
      style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getPlatformColorFromString(widgetName),
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: PlatformColor('lightText'),
          }}
        >
          {widgetName.slice(0, 1).toUpperCase()}
        </Text>
      </View>
    </View>
  )
}
