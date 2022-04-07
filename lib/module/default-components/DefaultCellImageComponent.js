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
import { Image, View } from 'react-native';
import { IMAGE_COMPONENT_WIDTH, IMAGE_GAP } from '../constants';
export function DefaultCellImageComponent(props) {
    var item = props.item;
    var image = item.image;
    var imageElement = null;
    if (image) {
        if (typeof image === 'object' && 'type' in image) {
            imageElement = image;
        }
        else {
            imageElement = _jsx(Image, { source: image, style: { width: 30, height: 30 } });
        }
    }
    return (_jsx(View, __assign({ style: {
            width: image ? IMAGE_COMPONENT_WIDTH : IMAGE_GAP * 2,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        } }, { children: imageElement })));
}
//# sourceMappingURL=DefaultCellImageComponent.js.map