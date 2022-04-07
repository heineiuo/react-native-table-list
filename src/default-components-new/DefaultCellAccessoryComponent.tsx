import { ListRenderItemInfo, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { Icon } from '../../Icon'

export function DefaultCellAccessoryComponent<ItemT>(
  props: ListRenderItemInfo<ItemT>
): JSX.Element {
  const item = props.item as any
  const { accessoryType = 'none' } = item
  useColorScheme()

  return (
    <View
      style={{
        width: accessoryType === 'none' ? 10 : 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}
    >
      {accessoryType === 'disclosure' && (
        <Icon
          name="ChevronRight"
          size={22}
          color={PlatformColor('systemGray5')}
        />
      )}
      {accessoryType === 'checkmark' && (
        <Icon
          name="Check"
          size={20}
          style={{ marginRight: 6 }}
          color={PlatformColor('link')}
        />
      )}
    </View>
  )
}
