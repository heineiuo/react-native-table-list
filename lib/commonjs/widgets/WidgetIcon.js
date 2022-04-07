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
exports.WidgetIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
var getPlatformColorFormString_1 = require("../getPlatformColorFormString");
function WidgetIcon(props) {
    (0, react_native_1.useColorScheme)();
    var _a = props.widgetName, widgetName = _a === void 0 ? 'U' : _a;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                width: 24,
                height: 24,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (0, getPlatformColorFormString_1.getPlatformColorFromString)(widgetName),
            } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: {
                    fontWeight: 'bold',
                    color: (0, react_native_platform_color_1.PlatformColor)('lightText'),
                } }, { children: widgetName.slice(0, 1).toUpperCase() })) })) })));
}
exports.WidgetIcon = WidgetIcon;
//# sourceMappingURL=WidgetIcon.js.map