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
import { useEffect, useState } from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { useEditableCell } from '../../editable/EditableContext';
export function CellValueSetComponent(props) {
    useColorScheme();
    var item = props.item;
    var _a = useEditableCell(), value = _a.value, setName = _a.setName, multiline = _a.multiline, updateField = _a.updateField;
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState([]), options = _c[0], setOptions = _c[1];
    useEffect(function () { }, [setName]);
    return (_jsx(View, __assign({ style: {
            flex: 1,
            flexDirection: multiline ? 'column' : 'row',
            alignItems: multiline ? 'flex-start' : 'center',
        } }, { children: _jsx(Text, __assign({ style: { color: PlatformColor('label') } }, { children: item.title })) })));
}
//# sourceMappingURL=EditableValueSet.js.map