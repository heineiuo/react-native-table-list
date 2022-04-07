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
import { Switch, Text, useColorScheme, View } from 'react-native';
import { PlatformColor } from 'react-native-platform-color';
import { useEditableCell } from '../../editable/EditableContext';
export function CellSwitchComponent(props) {
    useColorScheme();
    var item = props.item;
    var _a = useEditableCell(), value = _a.value, disabled = _a.disabled, readOnly = _a.readOnly, updateField = _a.updateField;
    var switchValue = value;
    if (typeof switchValue !== 'boolean') {
        switchValue = false;
    }
    return (_jsxs(View, __assign({ style: {
            flex: 1,
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        } }, { children: [_jsx(Text, __assign({ style: { color: PlatformColor('label') } }, { children: item.title })), _jsx(View, __assign({ style: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                } }, { children: _jsx(Switch, { disabled: disabled || readOnly, value: switchValue, onValueChange: function (value) { return updateField({ value: value }); } }) }))] })));
}
//# sourceMappingURL=EditableSwitch.js.map