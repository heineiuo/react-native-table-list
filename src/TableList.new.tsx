import { useCallback } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ListRenderItem,
  useWindowDimensions,
} from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { HorizontalWrapper } from './HorizontalWrapper'
import { TableListPropsNew } from './TableListTypes'
import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from './constants'
import { DefaultCellAccessoryComponent } from './default-components-new/DefaultCellAccessoryComponent'
import { DefaultCellContentComponent } from './default-components-new/DefaultCellContentComponent'
import { DefaultCellImageComponent } from './default-components-new/DefaultCellImageComponent'
import { DefaultItemSeperatorComponent } from './default-components/DefaultItemSeperatorComponent'
import { useColors } from './useColors'

export function TableList<ItemT extends Record<string, any>>(
  props: TableListPropsNew<ItemT>
): JSX.Element {
  const { height } = useWindowDimensions()
  const {
    onDragEnd,
    data,
    keyExtractor: propsKeyExtractor,
    onPress,
    ItemSeparatorComponent = DefaultItemSeperatorComponent,
    style,
    draggable = false,
    ...otherProps
  } = props
  const colors = useColors()

  const TableListCellContentComponent =
    props.CellContentComponent ?? DefaultCellContentComponent
  const TableListCellImageComponent =
    props.CellImageComponent ?? DefaultCellImageComponent
  const TableListCellAccessoryComponent =
    props.CellAccessoryComponent ?? DefaultCellAccessoryComponent

  const keyExtractor = useCallback(
    (item, index) => {
      if (propsKeyExtractor) {
        return propsKeyExtractor(item, index)
      }

      return item.key || item.id
    },
    [propsKeyExtractor]
  )

  const renderItem = useCallback<ListRenderItem<ItemT>>(
    (info) => {
      if (!data) {
        return null
      }
      const { item, drag, isActive, index } = info as any
      const {
        activeOpacity,
        header,
        draggable: itemOriginalDraggable,
        footer,
      } = item
      let itemDraggable = itemOriginalDraggable
      if (!draggable) {
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
          {isLeading && renderSectionHeader({ isActive, section: { header } })}
          <TouchableOpacity
            activeOpacity={activeOpacity as number}
            onLongPress={itemDraggable && drag}
            style={{
              flexDirection: 'row',
              minHeight: 42,
              paddingVertical: 4,
              alignItems: 'center',
              backgroundColor: `${colors.card}`,
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
          </TouchableOpacity>

          {isTrailing && renderSectionFooter({ isActive, section: { footer } })}
        </HorizontalWrapper>
      )
    },
    [colors, onPress, draggable, data]
  )

  const renderSectionHeader = useCallback<
    (info: {
      isActive: boolean
      section: { header: any }
    }) => JSX.Element | null
  >(({ section, isActive }) => {
    let header = section.header
    if (typeof header === 'string') {
      header = (
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
      )
    }
    return (
      <HorizontalWrapper>
        <View
          style={{
            minHeight: 24,
            paddingLeft: IMAGE_GAP * 2,
            paddingTop: 4,
          }}
        >
          {header}
        </View>
      </HorizontalWrapper>
    )
  }, [])

  const renderSectionFooter = useCallback<
    (info: {
      isActive: boolean
      section: { footer: any }
    }) => JSX.Element | null
  >(({ section, isActive }) => {
    let footer = section.footer
    if (typeof footer === 'string') {
      footer = (
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
      )
    }

    return (
      <HorizontalWrapper>
        <View
          style={{
            minHeight: 20,
          }}
        >
          {footer}
        </View>
      </HorizontalWrapper>
    )
  }, [])

  return (
    <FlatList
      disableVirtualization={false}
      legacyImplementation={false}
      keyExtractor={keyExtractor}
      style={[
        {
          height,
        },
        style,
      ]}
      data={data}
      renderItem={renderItem}
      // onDragEnd={onDragEnd}
      ItemSeparatorComponent={ItemSeparatorComponent}
      {...otherProps}
    />
  )
}

// export const TableList = forwardRef(TableListRender)
