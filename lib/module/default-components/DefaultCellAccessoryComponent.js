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
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
export function DefaultCellAccessoryComponent(props) {
    var item = props.item;
    var _a = item.accessoryType, accessoryType = _a === void 0 ? 'none' : _a;
    return (_jsxs(View, __assign({ style: {
            width: accessoryType === 'none' ? 10 : 40,
            flexDirection: 'row',
            justifyContent: 'flex-end',
        } }, { children: [accessoryType === 'disclosure' && (_jsx(MaterialIcons, { name: "chevron-right", size: 22, color: PlatformColor('tertiaryLabel') })), accessoryType === 'checkmark' && (_jsx(MaterialIcons, { name: "check", size: 20, style: { marginRight: 6 }, color: PlatformColor('link') }))] })));
}
//# sourceMappingURL=DefaultCellAccessoryComponent.js.map