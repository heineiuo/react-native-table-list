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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, useColorScheme, View } from "react-native";
import { PlatformColor } from "react-native-platform-color";
import { useColors } from "../useColors";
export function DefaultCellContentComponent(props) {
    var colors = useColors();
    var item = props.item;
    var detail = item.detail, title = item.title;
    var detailElement = detail;
    useColorScheme();
    if (typeof detailElement === "string") {
        detailElement = (_jsx(Text, __assign({ style: {
                color: PlatformColor("label"),
            } }, { children: detail })));
    }
    return (_jsxs(View, __assign({ style: {
            justifyContent: "space-between",
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
        } }, { children: [_jsx(Text, __assign({ style: { color: colors.text } }, { children: title })), _jsx(View, __assign({ style: {
                    paddingLeft: 10,
                    justifyContent: "space-between",
                    flex: 1,
                    alignItems: "center",
                    flexDirection: "row",
                } }, { children: _jsx(View, __assign({ style: {
                        flex: 1,
                        overflow: "hidden",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                    } }, { children: detailElement })) }))] })));
}
//# sourceMappingURL=DefaultCellContentComponent.js.map