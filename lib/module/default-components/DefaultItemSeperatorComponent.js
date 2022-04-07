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
import { useColorScheme, View } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { HorizontalWrapper } from '../HorizontalWrapper';
import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from '../constants';
export function DefaultItemSeperatorComponent(info) {
    var paddingLeft = info.leadingItem.image
        ? IMAGE_COMPONENT_WIDTH
        : IMAGE_GAP * 2;
    if (typeof info.leadingItem.imageWidth === 'number') {
        paddingLeft = info.leadingItem.imageWidth;
    }
    useColorScheme();
    return (_jsx(HorizontalWrapper, { children: _jsx(View, __assign({ style: {
                height: 1,
                paddingLeft: paddingLeft,
                backgroundColor: PlatformColor('secondarySystemGroupedBackground'),
            } }, { children: _jsx(View, { style: {
                    height: 1,
                    backgroundColor: PlatformColor('tertiarySystemGroupedBackground'),
                } }) })) }));
}
//# sourceMappingURL=DefaultItemSeperatorComponent.js.map