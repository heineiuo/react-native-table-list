import { MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

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
        <MaterialIcons
          name="chevron-right"
          size={22}
          color={PlatformColor('tertiaryLabel')}
        />
      )}
      {accessoryType === 'checkmark' && (
        <MaterialIcons
          name="check"
          size={20}
          style={{ marginRight: 6 }}
          color={PlatformColor('link')}
        />
      )}
    </View>
  )
}
