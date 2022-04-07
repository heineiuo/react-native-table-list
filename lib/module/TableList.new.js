var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Text, TouchableOpacity, View, FlatList, useWindowDimensions, } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { HorizontalWrapper } from './HorizontalWrapper';
import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from './constants';
import { DefaultCellAccessoryComponent } from './default-components-new/DefaultCellAccessoryComponent';
import { DefaultCellContentComponent } from './default-components-new/DefaultCellContentComponent';
import { DefaultCellImageComponent } from './default-components-new/DefaultCellImageComponent';
import { DefaultItemSeperatorComponent } from './default-components/DefaultItemSeperatorComponent';
import { useColors } from './useColors';
export function TableList(props) {
    var _a, _b, _c;
    var height = useWindowDimensions().height;
    var onDragEnd = props.onDragEnd, data = props.data, propsKeyExtractor = props.keyExtractor, onPress = props.onPress, _d = props.ItemSeparatorComponent, ItemSeparatorComponent = _d === void 0 ? DefaultItemSeperatorComponent : _d, style = props.style, _e = props.draggable, draggable = _e === void 0 ? false : _e, otherProps = __rest(props, ["onDragEnd", "data", "keyExtractor", "onPress", "ItemSeparatorComponent", "style", "draggable"]);
    var colors = useColors();
    var TableListCellContentComponent = (_a = props.CellContentComponent) !== null && _a !== void 0 ? _a : DefaultCellContentComponent;
    var TableListCellImageComponent = (_b = props.CellImageComponent) !== null && _b !== void 0 ? _b : DefaultCellImageComponent;
    var TableListCellAccessoryComponent = (_c = props.CellAccessoryComponent) !== null && _c !== void 0 ? _c : DefaultCellAccessoryComponent;
    var keyExtractor = useCallback(function (item, index) {
        if (propsKeyExtractor) {
            return propsKeyExtractor(item, index);
        }
        return item.key || item.id;
    }, [propsKeyExtractor]);
    var renderItem = useCallback(function (info) {
        var _a, _b, _c, _d, _e;
        if (!data) {
            return null;
        }
        var _f = info, item = _f.item, drag = _f.drag, isActive = _f.isActive, index = _f.index;
        var activeOpacity = item.activeOpacity, header = item.header, itemOriginalDraggable = item.draggable, footer = item.footer;
        var itemDraggable = itemOriginalDraggable;
        if (!draggable) {
            itemDraggable = false;
        }
        else if (typeof itemDraggable === 'undefined') {
            itemDraggable = true;
        }
        var CellContentComponent = (_a = item.CellContentComponent) !== null && _a !== void 0 ? _a : TableListCellContentComponent;
        var CellImageComponent = (_b = item.CellImageComponent) !== null && _b !== void 0 ? _b : TableListCellImageComponent;
        var CellAccessoryComponent = (_c = item.CellAccessoryComponent) !== null && _c !== void 0 ? _c : TableListCellAccessoryComponent;
        var isFirst = index === 0;
        var isLast = index === data.length - 1;
        var prevItem = (_d = data[index - 1]) !== null && _d !== void 0 ? _d : { header: null, footer: null };
        var nextItem = (_e = data[index + 1]) !== null && _e !== void 0 ? _e : { header: null, footer: null };
        var isLeading = isFirst || !!item.header || !!prevItem.footer;
        var isTrailing = isLast || !!item.footer || !!nextItem.header;
        var paddingLeft = item.image ? IMAGE_COMPONENT_WIDTH : IMAGE_GAP * 2;
        if (typeof item.imageWidth === 'number') {
            paddingLeft = item.imageWidth;
        }
        return (_jsxs(HorizontalWrapper, { children: [isLeading && renderSectionHeader({ isActive: isActive, section: { header: header } }), _jsxs(TouchableOpacity, __assign({ activeOpacity: activeOpacity, onLongPress: itemDraggable && drag, style: {
                        flexDirection: 'row',
                        minHeight: 42,
                        paddingVertical: 4,
                        alignItems: 'center',
                        backgroundColor: "".concat(colors.card),
                        borderTopLeftRadius: isLeading ? 15 : 0,
                        borderTopRightRadius: isLeading ? 15 : 0,
                        borderBottomLeftRadius: isTrailing ? 15 : 0,
                        borderBottomRightRadius: isTrailing ? 15 : 0,
                    }, onPress: function (e) {
                        if (onPress) {
                            onPress(e, info);
                        }
                    } }, { children: [_jsx(CellImageComponent, __assign({}, info)), _jsx(CellContentComponent, __assign({}, info)), _jsx(CellAccessoryComponent, __assign({}, info))] })), isTrailing && renderSectionFooter({ isActive: isActive, section: { footer: footer } })] }));
    }, [colors, onPress, draggable, data]);
    var renderSectionHeader = useCallback(function (_a) {
        var section = _a.section, isActive = _a.isActive;
        var header = section.header;
        if (typeof header === 'string') {
            header = (_jsx(Text, __assign({ style: {
                    opacity: isActive ? 0.2 : 1,
                    fontSize: 12,
                    lineHeight: 18,
                    color: PlatformColor('systemGray'),
                } }, { children: header })));
        }
        return (_jsx(HorizontalWrapper, { children: _jsx(View, __assign({ style: {
                    minHeight: 24,
                    paddingLeft: IMAGE_GAP * 2,
                    paddingTop: 4,
                } }, { children: header })) }));
    }, []);
    var renderSectionFooter = useCallback(function (_a) {
        var section = _a.section, isActive = _a.isActive;
        var footer = section.footer;
        if (typeof footer === 'string') {
            footer = (_jsx(Text, __assign({ style: {
                    opacity: isActive ? 0.2 : 1,
                    fontSize: 12,
                    lineHeight: 18,
                    color: PlatformColor('systemGray'),
                } }, { children: footer })));
        }
        return (_jsx(HorizontalWrapper, { children: _jsx(View, __assign({ style: {
                    minHeight: 20,
                } }, { children: footer })) }));
    }, []);
    return (_jsx(FlatList, __assign({ disableVirtualization: false, legacyImplementation: false, keyExtractor: keyExtractor, style: [
            {
                height: height,
            },
            style,
        ], data: data, renderItem: renderItem, 
        // onDragEnd={onDragEnd}
        ItemSeparatorComponent: ItemSeparatorComponent }, otherProps)));
}
//# sourceMappingURL=TableList.new.js.map