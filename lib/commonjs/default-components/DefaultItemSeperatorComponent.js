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
exports.DefaultItemSeperatorComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
var HorizontalWrapper_1 = require("../HorizontalWrapper");
var constants_1 = require("../constants");
function DefaultItemSeperatorComponent(info) {
    var paddingLeft = info.leadingItem.image
        ? constants_1.IMAGE_COMPONENT_WIDTH
        : constants_1.IMAGE_GAP * 2;
    if (typeof info.leadingItem.imageWidth === 'number') {
        paddingLeft = info.leadingItem.imageWidth;
    }
    (0, react_native_1.useColorScheme)();
    return ((0, jsx_runtime_1.jsx)(HorizontalWrapper_1.HorizontalWrapper, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                height: 1,
                paddingLeft: paddingLeft,
                backgroundColor: (0, react_native_platform_color_1.PlatformColor)('secondarySystemGroupedBackground'),
            } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    height: 1,
                    backgroundColor: (0, react_native_platform_color_1.PlatformColor)('tertiarySystemGroupedBackground'),
                } }) })) }));
}
exports.DefaultItemSeperatorComponent = DefaultItemSeperatorComponent;
//# sourceMappingURL=DefaultItemSeperatorComponent.js.map