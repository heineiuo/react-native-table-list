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
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useWindowDimensions, View } from "react-native";
export function HorizontalWrapper(props) {
    var width = useWindowDimensions().width;
    var _a = useState(null), childWidth = _a[0], setChildWidth = _a[1];
    var onLayout = useCallback(function (e) {
        var width = e.nativeEvent.layout.width;
        if (width !== childWidth) {
            setChildWidth(width);
        }
    }, [childWidth]);
    return (_jsx(View, __assign({ style: {
            alignItems: "center",
        } }, { children: _jsx(View, __assign({ style: {
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
//# sourceMappingURL=HorizontalWrapper.js.map