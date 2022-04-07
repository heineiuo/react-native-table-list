import { createContext, useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { HorizontalWrapper } from '../HorizontalWrapper'
import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from '../constants'
// import { ScaleDecorator } from 'react-native-draggable-flatlist'

const ScaleDecorator = View

const WidgetItemContext = createContext({
  draggable: false,
} as {
  draggable: boolean
})

const useWidgetItem = () => useContext(WidgetItemContext)

function WidgetItem(info) {
  const { item, drag, isActive, index } = info
  const ctx = useWidgetItem()
  const {
    activeOpacity,
    header,
    draggable: itemOriginalDraggable,
    footer,
  } = item
  let itemDraggable = itemOriginalDraggable
  if (!ctx.draggable) {
    itemDraggable = false
  } else if (typeof itemDraggable === 'undefined') {
    itemDraggable = true
  }
  const CellContentComponent: ListRenderItem<ItemT> =
    item.CellContentComponent ?? TableListCellContentComponent
  const CellImageComponent: ListRenderItem<ItemT> =
    item.CellImageComponent ?? TableListCellImageComponent
  const CellAccessoryComponent: ListRenderItem<ItemT> =
    item.CellAccessoryComponent ?? TableListCellAccessoryComponent

  const isFirst = index === 0
  const isLast = index === data.length - 1
  const prevItem = data[index - 1] ?? { header: null, footer: null }
  const nextItem = data[index + 1] ?? { header: null, footer: null }

  const isLeading = isFirst || !!item.header || !!prevItem.footer
  const isTrailing = isLast || !!item.footer || !!nextItem.header

  let paddingLeft = item.image ? IMAGE_COMPONENT_WIDTH : IMAGE_GAP * 2
  if (typeof item.imageWidth === 'number') {
    paddingLeft = item.imageWidth
  }

  return (
    <HorizontalWrapper>
      {isLeading && (
        <Text
          style={{
            opacity: isActive ? 0.2 : 1,
            fontSize: 12,
            lineHeight: 18,
            color: PlatformColor('systemGray'),
          }}
        >
          {header}
        </Text>
      )}
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={activeOpacity as number}
          onLongPress={itemDraggable && drag}
          style={{
            flexDirection: 'row',
            minHeight: 42,
            paddingVertical: 4,
            alignItems: 'center',
            backgroundColor: PlatformColor('systemBackground'),
            borderTopLeftRadius: isLeading ? 15 : 0,
            borderTopRightRadius: isLeading ? 15 : 0,
            borderBottomLeftRadius: isTrailing ? 15 : 0,
            borderBottomRightRadius: isTrailing ? 15 : 0,
          }}
          onPress={(e) => {
            if (onPress) {
              onPress(e, info)
            }
          }}
        >
          <CellImageComponent {...info} />
          <CellContentComponent {...info} />
          <CellAccessoryComponent {...info} />
          <View
            style={{
              display: isTrailing ? 'none' : 'flex',
              position: 'absolute',
              height: 1,
              bottom: 0,
              right: 0,
              left: paddingLeft,
              backgroundColor: PlatformColor('tertiarySystemBackground'),
            }}
          >
            <View
              style={{
                height: 1,
                backgroundColor: PlatformColor('systemGray6'),
              }}
            />
          </View>
        </TouchableOpacity>
      </ScaleDecorator>

      {isTrailing && (
        <Text
          style={{
            opacity: isActive ? 0.2 : 1,
            fontSize: 12,
            lineHeight: 18,
            color: PlatformColor('systemGray'),
          }}
        >
          {footer}
        </Text>
      )}
    </HorizontalWrapper>
  )
}
