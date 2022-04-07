"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
var HorizontalWrapper_1 = require("./HorizontalWrapper");
var constants_1 = require("./constants");
var DefaultCellAccessoryComponent_1 = require("./default-components/DefaultCellAccessoryComponent");
var DefaultCellContentComponent_1 = require("./default-components/DefaultCellContentComponent");
var DefaultCellImageComponent_1 = require("./default-components/DefaultCellImageComponent");
var DefaultItemSeperatorComponent_1 = require("./default-components/DefaultItemSeperatorComponent");
var useColors_1 = require("./useColors");
function TableList(props) {
    var height = (0, react_native_1.useWindowDimensions)().height;
    var sections = props.sections, keyExtractor = props.keyExtractor, onPress = props.onPress, _a = props.ItemSeparatorComponent, ItemSeparatorComponent = _a === void 0 ? DefaultItemSeperatorComponent_1.DefaultItemSeperatorComponent : _a, style = props.style, otherProps = __rest(props, ["sections", "keyExtractor", "onPress", "ItemSeparatorComponent", "style"]);
    var colors = (0, useColors_1.useColors)();
    (0, react_native_1.useColorScheme)();
    var renderItem = (0, react_1.useCallback)(function (info) {
        var item = info.item, index = info.index, section = info.section;
        var activeOpacity = item.activeOpacity, _a = item.CellContentComponent, CellContentComponent = _a === void 0 ? DefaultCellContentComponent_1.DefaultCellContentComponent : _a, _b = item.CellImageComponent, CellImageComponent = _b === void 0 ? DefaultCellImageComponent_1.DefaultCellImageComponent : _b, _c = item.CellAccessoryComponent, CellAccessoryComponent = _c === void 0 ? DefaultCellAccessoryComponent_1.DefaultCellAccessoryComponent : _c;
        var isFirst = index === 0;
        var isLast = index === section.data.length - 1;
        return ((0, jsx_runtime_1.jsx)(HorizontalWrapper_1.HorizontalWrapper, { children: (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, __assign({ activeOpacity: activeOpacity, style: {
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
                } }, { children: [(0, jsx_runtime_1.jsx)(CellImageComponent, __assign({}, info)), (0, jsx_runtime_1.jsx)(CellContentComponent, __assign({}, info)), (0, jsx_runtime_1.jsx)(CellAccessoryComponent, __assign({}, info))] })) }));
    }, [colors, onPress]);
    var renderSectionHeader = (0, react_1.useCallback)(function (_a) {
        var section = _a.section;
        var header = section.header;
        if (typeof header === 'string') {
            header = ((0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: {
                    fontSize: 12,
                    lineHeight: 18,
                    color: (0, react_native_platform_color_1.PlatformColor)('systemGray'),
                } }, { children: header })));
        }
        return ((0, jsx_runtime_1.jsx)(HorizontalWrapper_1.HorizontalWrapper, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                    minHeight: 24,
                    paddingLeft: constants_1.IMAGE_GAP * 2,
                    paddingTop: 4,
                } }, { children: header })) }));
    }, []);
    var renderSectionFooter = (0, react_1.useCallback)(function (_a) {
        var section = _a.section;
        var footer = section.footer;
        if (typeof footer === 'string') {
            footer = ((0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: {
                    fontSize: 12,
                    lineHeight: 18,
                    color: (0, react_native_platform_color_1.PlatformColor)('systemGray'),
                } }, { children: footer })));
        }
        return ((0, jsx_runtime_1.jsx)(HorizontalWrapper_1.HorizontalWrapper, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                    minHeight: 20,
                } }, { children: footer })) }));
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_native_1.SectionList, __assign({ disableVirtualization: false, legacyImplementation: false, keyExtractor: keyExtractor, style: [
            {
                height: height,
            },
            style,
        ], renderItem: renderItem, sections: sections, renderSectionHeader: renderSectionHeader, renderSectionFooter: renderSectionFooter, ItemSeparatorComponent: ItemSeparatorComponent }, otherProps)));
}
exports.TableList = TableList;
//# sourceMappingURL=TableList.old.js.map