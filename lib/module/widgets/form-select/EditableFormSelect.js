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
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { useEditableCell } from '../../editable/EditableContext';
export function CellFormSelectComponent(props) {
    useColorScheme();
    var item = props.item;
    var navigate = useNavigation().navigate;
    var _a = useEditableCell(), value = _a.value, multiline = _a.multiline, updateField = _a.updateField;
    var _b = useState(Array.isArray(value) ? value : typeof value === 'string' ? [value] : []), selected = _b[0], setSelected = _b[1];
    var dispatch = useCallback(function (type, item) {
        setSelected(function (prevSelected) {
            if (prevSelected.includes(item.id)) {
                return prevSelected.filter(function (item2) { return item2 !== item.id; });
            }
            else {
                return prevSelected.concat(item.id);
            }
        });
    }, []);
    useEffect(function () {
        updateField({ value: selected[0] });
    }, [updateField, selected]);
    return (_jsxs(View, __assign({ style: {
            flex: 1,
            flexDirection: multiline ? 'column' : 'row',
            alignItems: multiline ? 'flex-start' : 'center',
        } }, { children: [_jsx(Text, __assign({ style: { color: PlatformColor('label') } }, { children: item.title })), _jsx(TouchableOpacity, __assign({ style: { flex: 1 }, onPress: function () {
                    return navigate('Modal', {
                        screen: 'FormListSelect',
                    });
                } }, { children: _jsx(Text, __assign({ style: {
                        color: PlatformColor('systemGray2'),
                        textAlign: 'right',
                        paddingHorizontal: 10,
                    } }, { children: "\u8BF7\u9009\u62E9" })) }))] })));
}
//# sourceMappingURL=EditableFormSelect.js.map