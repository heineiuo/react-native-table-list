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
import { Text, useColorScheme, View } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { getPlatformColorFromString } from '../getPlatformColorFormString';
export function WidgetIcon(props) {
    useColorScheme();
    var _a = props.widgetName, widgetName = _a === void 0 ? 'U' : _a;
    return (_jsx(View, __assign({ style: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        } }, { children: _jsx(View, __assign({ style: {
                width: 24,
                height: 24,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: getPlatformColorFromString(widgetName),
            } }, { children: _jsx(Text, __assign({ style: {
                    fontWeight: 'bold',
                    color: PlatformColor('lightText'),
                } }, { children: widgetName.slice(0, 1).toUpperCase() })) })) })));
}
//# sourceMappingURL=WidgetIcon.js.map