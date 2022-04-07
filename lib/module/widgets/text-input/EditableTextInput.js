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
import { useCallback } from 'react';
import { Platform, Text, TextInput, useColorScheme, View } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { useEditableCell } from '../../editable/EditableContext';
export function CellTextInputComponent(props) {
    useColorScheme();
    var item = props.item;
    var _a = useEditableCell(), disabled = _a.disabled, value = _a.value, multiline = _a.multiline, _b = _a.numberOfLines, numberOfLines = _b === void 0 ? 1 : _b, updateField = _a.updateField, readOnly = _a.readOnly;
    var onTextInputLayout = useCallback(function (e) {
        var next = e.nativeEvent.contentSize.height / 18;
        updateField({ numberOfLines: next });
    }, [updateField]);
    var interValue = typeof value === 'string' ? value : '';
    var textAlign = multiline ? 'left' : 'right';
    return (_jsxs(View, __assign({ style: {
            flex: 1,
            flexDirection: multiline ? 'column' : 'row',
            alignItems: multiline ? 'flex-start' : 'center',
        } }, { children: [_jsx(Text, __assign({ style: { color: PlatformColor('label') } }, { children: item.title })), _jsx(TextInput, { textAlign: textAlign, placeholder: item.subtitle, clearButtonMode: "while-editing", value: interValue, onChangeText: function (value) {
                    updateField({ value: value });
                }, multiline: multiline, numberOfLines: numberOfLines, onContentSizeChange: onTextInputLayout, editable: !readOnly && !disabled, style: [
                    {
                        flex: 1,
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        textAlign: textAlign,
                        color: PlatformColor('label'),
                        backgroundColor: PlatformColor('secondarySystemGroupedBackground'),
                    },
                    __assign({}, Platform.select({
                        web: {
                            outline: 0,
                        },
                    })),
                ] })] })));
}
//# sourceMappingURL=EditableTextInput.js.map