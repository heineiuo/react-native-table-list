import { useCallback } from 'react'
import {
  SectionList,
  Text,
  SectionListData,
  TouchableOpacity,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

import { HorizontalWrapper } from './HorizontalWrapper'
import {
  TableListCellCustomComponentProps,
  TableListProps,
  TableListSection,
  TableListSectionDataItem,
} from './TableListTypes'
import { IMAGE_GAP } from './constants'
import { DefaultCellAccessoryComponent } from './default-components/DefaultCellAccessoryComponent'
import { DefaultCellContentComponent } from './default-components/DefaultCellContentComponent'
import { DefaultCellImageComponent } from './default-components/DefaultCellImageComponent'
import { DefaultItemSeperatorComponent } from './default-components/DefaultItemSeperatorComponent'
import { useColors } from './useColors'

export function TableList<
  ItemT extends Record<string, unknown>,
  SectionT extends Record<string, unknown>,
  ListT extends Record<string, unknown>
>(props: TableListProps<ItemT, SectionT, ListT>): JSX.Element {
  const { height } = useWindowDimensions()
  const {
    sections,
    keyExtractor,
    onPress,
    ItemSeparatorComponent = DefaultItemSeperatorComponent,
    style,
    ...otherProps
  } = props
  const colors = useColors()
  useColorScheme()
  const renderItem = useCallback<
    (info: TableListCellCustomComponentProps<ItemT, SectionT>) => JSX.Element
  >(
    (info) => {
      const { item, index, section } = info
      const {
        activeOpacity,
        CellContentComponent = DefaultCellContentComponent,
        CellImageComponent = DefaultCellImageComponent,
        CellAccessoryComponent = DefaultCellAccessoryComponent,
      } = item
      const isFirst = index === 0
      const isLast = index === section.data.length - 1

      return (
        <HorizontalWrapper>
          <TouchableOpacity
            activeOpacity={activeOpacity as number}
            style={{
              flexDirection: 'row',
              minHeight: 42,
              paddingVertical: 4,
              alignItems: 'center',
              backgroundColor: `${colors.card}`,
              borderTopLeftRadius: isFirst ? 15 : 0,
              borderTopRightRadius: isFirst ? 15 : 0,
              borderBottomLeftRadius: isLast ? 15 : 0,
              borderBottomRightRadius: isLast ? 15 : 0,
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
        </HorizontalWrapper>
      )
    },
    [colors, onPress]
  )

  const renderSectionHeader = useCallback<
    (info: {
      section: SectionListData<
        TableListSectionDataItem<ItemT, SectionT>,
        TableListSection<SectionT>
      >
    }) => JSX.Element | null
  >(({ section }) => {
    let header = section.header
    if (typeof header === 'string') {
      header = (
        <Text
          style={{
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
      section: SectionListData<
        TableListSectionDataItem<ItemT, SectionT>,
        TableListSection<SectionT>
      >
    }) => JSX.Element | null
  >(({ section }) => {
    let footer = section.footer
    if (typeof footer === 'string') {
      footer = (
        <Text
          style={{
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
    <SectionList
      disableVirtualization={false}
      legacyImplementation={false}
      keyExtractor={keyExtractor}
      style={[
        {
          height,
        },
        style,
      ]}
      renderItem={renderItem}
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderSectionFooter={renderSectionFooter}
      ItemSeparatorComponent={ItemSeparatorComponent}
      {...otherProps}
    />
  )
}

// export const TableList = forwardRef(TableListRender)
