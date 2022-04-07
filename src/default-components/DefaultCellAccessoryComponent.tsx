import { View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { Icon } from '../../Icon'
import { TableListCellCustomComponentProps } from '../TableListTypes'

export function DefaultCellAccessoryComponent(
  props: TableListCellCustomComponentProps<any, any>
): JSX.Element {
  const { item } = props
  const { accessoryType = 'none' } = item
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
          color={PlatformColor('tertiaryLabel')}
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
