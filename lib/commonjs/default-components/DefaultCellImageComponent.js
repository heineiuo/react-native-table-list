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
exports.DefaultCellImageComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var constants_1 = require("../constants");
function DefaultCellImageComponent(props) {
    var item = props.item;
    var image = item.image;
    var imageElement = null;
    if (image) {
        if (typeof image === 'object' && 'type' in image) {
            imageElement = image;
        }
        else {
            imageElement = (0, jsx_runtime_1.jsx)(react_native_1.Image, { source: image, style: { width: 30, height: 30 } });
        }
    }
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
            width: image ? constants_1.IMAGE_COMPONENT_WIDTH : constants_1.IMAGE_GAP * 2,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        } }, { children: imageElement })));
}
exports.DefaultCellImageComponent = DefaultCellImageComponent;
//# sourceMappingURL=DefaultCellImageComponent.js.map