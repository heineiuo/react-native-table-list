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
exports.CellValueSetComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
var EditableContext_1 = require("../../editable/EditableContext");
function CellValueSetComponent(props) {
    (0, react_native_1.useColorScheme)();
    var item = props.item;
    var _a = (0, EditableContext_1.useEditableCell)(), value = _a.value, setName = _a.setName, multiline = _a.multiline, updateField = _a.updateField;
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)([]), options = _c[0], setOptions = _c[1];
    (0, react_1.useEffect)(function () { }, [setName]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
            flex: 1,
            flexDirection: multiline ? 'column' : 'row',
            alignItems: multiline ? 'flex-start' : 'center',
        } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: { color: (0, react_native_platform_color_1.PlatformColor)('label') } }, { children: item.title })) })));
}
exports.CellValueSetComponent = CellValueSetComponent;
//# sourceMappingURL=EditableValueSet.js.map