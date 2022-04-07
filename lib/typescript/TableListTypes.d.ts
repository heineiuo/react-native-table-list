/// <reference types="react" />
import { GestureResponderEvent, ImageSourcePropType, ListRenderItem, ListRenderItemInfo, SectionListData, SectionListProps, SectionListRenderItemInfo } from 'react-native';
import type { DraggableFlatListProps } from 'react-native-draggable-flatlist';
export declare type TableListSection<SectionT extends Record<string, unknown>> = SectionT & {
    header?: string | JSX.Element;
    footer?: string | JSX.Element;
};
export declare type TableListCellCustomComponentProps<ItemT extends Record<string, unknown>, SectionT extends Record<string, unknown>> = SectionListRenderItemInfo<TableListSectionDataItem<ItemT, SectionT>, TableListSection<SectionT>>;
/**
 * data[i]默认有的的字段
 */
export declare type TableListSectionDataItem<ItemT extends Record<string, unknown>, SectionT extends Record<string, unknown>> = ItemT & {
    id?: string;
    activeOpacity?: number;
    title: string;
    image?: ImageSourcePropType | JSX.Element;
    imageWidth?: number;
    subtitle?: string;
    detail?: string | JSX.Element | null;
    /**
     * disclosure checkmark
     */
    accessoryType?: string;
    /**
     * 最左边的图标组件
     */
    CellImageComponent?: (info: TableListCellCustomComponentProps<ItemT, SectionT>) => JSX.Element;
    /**
     * 中间的主要部分
     */
    CellContentComponent?: (info: TableListCellCustomComponentProps<ItemT, SectionT>) => JSX.Element;
    /**
     * 最右侧的部分
     */
    CellAccessoryComponent?: (info: TableListCellCustomComponentProps<ItemT, SectionT>) => JSX.Element;
};
export declare type TableListSections<ItemT extends Record<string, unknown>, SectionT extends Record<string, unknown>> = SectionListData<TableListSectionDataItem<ItemT, SectionT>, TableListSection<SectionT>>[];
/**
 * TableListProps
 *
 */
export declare type TableListProps<ItemT extends Record<string, unknown>, SectionT extends Record<string, unknown>, ListT extends Record<string, unknown>> = ListT & {
    onPress?: (e: GestureResponderEvent, info: SectionListRenderItemInfo<TableListSectionDataItem<ItemT, SectionT>, TableListSection<SectionT>>) => void;
} & SectionListProps<TableListSectionDataItem<ItemT, SectionT>, TableListSection<SectionT>>;
/**
 * TableListProps
 *
 */
export declare type TableListPropsNew<ItemT extends Record<string, unknown>> = {
    renderItem?: ListRenderItem<ItemT>;
    onPress?: (e: GestureResponderEvent, info: ListRenderItemInfo<ItemT>) => void;
    CellContentComponent?: ListRenderItem<ItemT>;
    CellImageComponent?: ListRenderItem<ItemT>;
    CellAccessoryComponent?: ListRenderItem<ItemT>;
    /**
     * if the tablelist can be dragged, default false
     */
    draggable?: boolean;
} & Omit<DraggableFlatListProps<ItemT>, 'renderItem' | 'keyExtractor'> & Pick<Partial<DraggableFlatListProps<ItemT>>, 'keyExtractor'>;
