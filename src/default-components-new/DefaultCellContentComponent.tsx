import { ReactComponentLike } from 'prop-types'
import { ReactNode, useContext } from 'react'
import { ListRenderItemInfo, Text, useColorScheme, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { EditableContext } from '../editable/EditableContext'
import { useColors } from '../useColors'
import { WidgetMap } from '../widgets/WidgetMap'

function FallbackComponent() {
  return null
}

export function DefaultCellContentComponent<ItemT>(
  props: ListRenderItemInfo<ItemT>
): JSX.Element {
  const colors = useColors()
  const item = props.item as any
  const { fieldId, detail, title = '' } = item
  let detailElement: ReactNode = detail
  useColorScheme()

  const { fields, dispatchField } = useContext(EditableContext)

  const widgetName = item.widgetName as keyof typeof WidgetMap
  let Component: ReactComponentLike = FallbackComponent

  if (widgetName && widgetName in WidgetMap) {
    Component = WidgetMap[widgetName]
  }

  if (typeof detailElement === 'string') {
    detailElement = (
      <Text
        style={{
          color: PlatformColor('label'),
        }}
      >
        {detail}
      </Text>
    )
  }

  return (
    <View
      style={{
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Text style={{ color: colors.text }}>{title}</Text>
      <View
        style={{
          paddingLeft: 10,
          justifyContent: 'space-between',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            overflow: 'hidden',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          {detailElement}
        </View>
      </View>
    </View>
  )
}
