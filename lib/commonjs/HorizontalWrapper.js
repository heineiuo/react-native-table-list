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
exports.HorizontalWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
function HorizontalWrapper(props) {
    var width = (0, react_native_1.useWindowDimensions)().width;
    var _a = (0, react_1.useState)(null), childWidth = _a[0], setChildWidth = _a[1];
    var onLayout = (0, react_1.useCallback)(function (e) {
        var width = e.nativeEvent.layout.width;
        if (width !== childWidth) {
            setChildWidth(width);
        }
    }, [childWidth]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
            alignItems: "center",
        } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                width: Math.min(640, width - 30),
            }, onLayout: onLayout }, { children: (function () {
                if (typeof props.children === "function") {
                    if (childWidth === null) {
                        return null;
                    }
                    return props.children({ width: width });
                }
                return props.children;
            })() })) })));
}
exports.HorizontalWrapper = HorizontalWrapper;
//# sourceMappingURL=HorizontalWrapper.js.map