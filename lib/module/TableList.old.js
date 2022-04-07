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
import { SectionList, Text, TouchableOpacity, View, useColorScheme, useWindowDimensions, } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { HorizontalWrapper } from './HorizontalWrapper';
import { IMAGE_GAP } from './constants';
import { DefaultCellAccessoryComponent } from './default-components/DefaultCellAccessoryComponent';
import { DefaultCellContentComponent } from './default-components/DefaultCellContentComponent';
import { DefaultCellImageComponent } from './default-components/DefaultCellImageComponent';
import { DefaultItemSeperatorComponent } from './default-components/DefaultItemSeperatorComponent';
import { useColors } from './useColors';
export function TableList(props) {
    var height = useWindowDimensions().height;
    var sections = props.sections, keyExtractor = props.keyExtractor, onPress = props.onPress, _a = props.ItemSeparatorComponent, ItemSeparatorComponent = _a === void 0 ? DefaultItemSeperatorComponent : _a, style = props.style, otherProps = __rest(props, ["sections", "keyExtractor", "onPress", "ItemSeparatorComponent", "style"]);
    var colors = useColors();
    useColorScheme();
    var renderItem = useCallback(function (info) {
        var item = info.item, index = info.index, section = info.section;
        var activeOpacity = item.activeOpacity, _a = item.CellContentComponent, CellContentComponent = _a === void 0 ? DefaultCellContentComponent : _a, _b = item.CellImageComponent, CellImageComponent = _b === void 0 ? DefaultCellImageComponent : _b, _c = item.CellAccessoryComponent, CellAccessoryComponent = _c === void 0 ? DefaultCellAccessoryComponent : _c;
        var isFirst = index === 0;
        var isLast = index === section.data.length - 1;
        return (_jsx(HorizontalWrapper, { children: _jsxs(TouchableOpacity, __assign({ activeOpacity: activeOpacity, style: {
                    flexDirection: 'row',
                    minHeight: 42,
                    paddingVertical: 4,
                    alignItems: 'center',
                    backgroundColor: "".concat(colors.card),
                    borderTopLeftRadius: isFirst ? 15 : 0,
                    borderTopRightRadius: isFirst ? 15 : 0,
                    borderBottomLeftRadius: isLast ? 15 : 0,
                    borderBottomRightRadius: isLast ? 15 : 0,
                }, onPress: function (e) {
                    if (onPress) {
                        onPress(e, info);
                    }
                } }, { children: [_jsx(CellImageComponent, __assign({}, info)), _jsx(CellContentComponent, __assign({}, info)), _jsx(CellAccessoryComponent, __assign({}, info))] })) }));
    }, [colors, onPress]);
    var renderSectionHeader = useCallback(function (_a) {
        var section = _a.section;
        var header = section.header;
        if (typeof header === 'string') {
            header = (_jsx(Text, __assign({ style: {
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
        var section = _a.section;
        var footer = section.footer;
        if (typeof footer === 'string') {
            footer = (_jsx(Text, __assign({ style: {
                    fontSize: 12,
                    lineHeight: 18,
                    color: PlatformColor('systemGray'),
                } }, { children: footer })));
        }
        return (_jsx(HorizontalWrapper, { children: _jsx(View, __assign({ style: {
                    minHeight: 20,
                } }, { children: footer })) }));
    }, []);
    return (_jsx(SectionList, __assign({ disableVirtualization: false, legacyImplementation: false, keyExtractor: keyExtractor, style: [
            {
                height: height,
            },
            style,
        ], renderItem: renderItem, sections: sections, renderSectionHeader: renderSectionHeader, renderSectionFooter: renderSectionFooter, ItemSeparatorComponent: ItemSeparatorComponent }, otherProps)));
}
//# sourceMappingURL=TableList.old.js.map