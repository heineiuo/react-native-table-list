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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCellAccessoryComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
function DefaultCellAccessoryComponent(props) {
    var item = props.item;
    var _a = item.accessoryType, accessoryType = _a === void 0 ? 'none' : _a;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: {
            width: accessoryType === 'none' ? 10 : 40,
            flexDirection: 'row',
            justifyContent: 'flex-end',
        } }, { children: [accessoryType === 'disclosure' && ((0, jsx_runtime_1.jsx)(vector_icons_1.MaterialIcons, { name: "chevron-right", size: 22, color: (0, react_native_platform_color_1.PlatformColor)('tertiaryLabel') })), accessoryType === 'checkmark' && ((0, jsx_runtime_1.jsx)(vector_icons_1.MaterialIcons, { name: "check", size: 20, style: { marginRight: 6 }, color: (0, react_native_platform_color_1.PlatformColor)('link') }))] })));
}
exports.DefaultCellAccessoryComponent = DefaultCellAccessoryComponent;
//# sourceMappingURL=DefaultCellAccessoryComponent.js.map