import { TouchableOpacity, useColorScheme } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

export function SectionCell(props: any) {
  const { item, index, section, style, onPress, children } = props
  const { activeOpacity, readOnly = true } = item
  const isFirst = index === 0
  const isLast = index === section.data.length - 1

  useColorScheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={readOnly ? 1 : activeOpacity}
      style={[
        {
          flexDirection: 'row',
          minHeight: 42,
          paddingVertical: 4,
          alignItems: 'center',
          backgroundColor: PlatformColor('secondarySystemGroupedBackground'),
          borderTopLeftRadius: isFirst ? 15 : 0,
          borderTopRightRadius: isFirst ? 15 : 0,
          borderBottomLeftRadius: isLast ? 15 : 0,
          borderBottomRightRadius: isLast ? 15 : 0,
        },
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  )
}
