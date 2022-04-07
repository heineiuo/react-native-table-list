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
import { TouchableOpacity, useColorScheme } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
export function SectionCell(props) {
    var item = props.item, index = props.index, section = props.section, style = props.style, onPress = props.onPress, children = props.children;
    var activeOpacity = item.activeOpacity, _a = item.readOnly, readOnly = _a === void 0 ? true : _a;
    var isFirst = index === 0;
    var isLast = index === section.data.length - 1;
    useColorScheme();
    return (_jsx(TouchableOpacity, __assign({ onPress: onPress, activeOpacity: readOnly ? 1 : activeOpacity, style: [
            {
                flexDirection: 'row',
                minHeight: 42,
                paddingVertical: 4,
                alignItems: 'center',
                backgroundColor: PlatformColor('secondarySystemGroupedBackground'),
                borderTopLeftRadius: isFirst ? 15 : 0,
                borderTopRightRadius: isFirst ? 15 : 0,
                borderBottomLeftRadius: isLast ? 15 : 0,
                borderBottomRightRadius: isLast ? 15 : 0,
            },
            style,
        ] }, { children: children })));
}
//# sourceMappingURL=SectionCell.js.map