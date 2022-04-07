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
exports.CellTextInputComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
var EditableContext_1 = require("../../editable/EditableContext");
function CellTextInputComponent(props) {
    (0, react_native_1.useColorScheme)();
    var item = props.item;
    var _a = (0, EditableContext_1.useEditableCell)(), disabled = _a.disabled, value = _a.value, multiline = _a.multiline, _b = _a.numberOfLines, numberOfLines = _b === void 0 ? 1 : _b, updateField = _a.updateField, readOnly = _a.readOnly;
    var onTextInputLayout = (0, react_1.useCallback)(function (e) {
        var next = e.nativeEvent.contentSize.height / 18;
        updateField({ numberOfLines: next });
    }, [updateField]);
    var interValue = typeof value === 'string' ? value : '';
    var textAlign = multiline ? 'left' : 'right';
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: {
            flex: 1,
            flexDirection: multiline ? 'column' : 'row',
            alignItems: multiline ? 'flex-start' : 'center',
        } }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: { color: (0, react_native_platform_color_1.PlatformColor)('label') } }, { children: item.title })), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { textAlign: textAlign, placeholder: item.subtitle, clearButtonMode: "while-editing", value: interValue, onChangeText: function (value) {
                    updateField({ value: value });
                }, multiline: multiline, numberOfLines: numberOfLines, onContentSizeChange: onTextInputLayout, editable: !readOnly && !disabled, style: [
                    {
                        flex: 1,
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        textAlign: textAlign,
                        color: (0, react_native_platform_color_1.PlatformColor)('label'),
                        backgroundColor: (0, react_native_platform_color_1.PlatformColor)('secondarySystemGroupedBackground'),
                    },
                    __assign({}, react_native_1.Platform.select({
                        web: {
                            outline: 0,
                        },
                    })),
                ] })] })));
}
exports.CellTextInputComponent = CellTextInputComponent;
//# sourceMappingURL=EditableTextInput.js.map