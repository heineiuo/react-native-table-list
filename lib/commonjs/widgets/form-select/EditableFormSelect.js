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
exports.CellFormSelectComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
var EditableContext_1 = require("../../editable/EditableContext");
function CellFormSelectComponent(props) {
    (0, react_native_1.useColorScheme)();
    var item = props.item;
    var navigate = (0, native_1.useNavigation)().navigate;
    var _a = (0, EditableContext_1.useEditableCell)(), value = _a.value, multiline = _a.multiline, updateField = _a.updateField;
    var _b = (0, react_1.useState)(Array.isArray(value) ? value : typeof value === 'string' ? [value] : []), selected = _b[0], setSelected = _b[1];
    var dispatch = (0, react_1.useCallback)(function (type, item) {
        setSelected(function (prevSelected) {
            if (prevSelected.includes(item.id)) {
                return prevSelected.filter(function (item2) { return item2 !== item.id; });
            }
            else {
                return prevSelected.concat(item.id);
            }
        });
    }, []);
    (0, react_1.useEffect)(function () {
        updateField({ value: selected[0] });
    }, [updateField, selected]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: {
            flex: 1,
            flexDirection: multiline ? 'column' : 'row',
            alignItems: multiline ? 'flex-start' : 'center',
        } }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: { color: (0, react_native_platform_color_1.PlatformColor)('label') } }, { children: item.title })), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ style: { flex: 1 }, onPress: function () {
                    return navigate('Modal', {
                        screen: 'FormListSelect',
                    });
                } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: {
                        color: (0, react_native_platform_color_1.PlatformColor)('systemGray2'),
                        textAlign: 'right',
                        paddingHorizontal: 10,
                    } }, { children: "\u8BF7\u9009\u62E9" })) }))] })));
}
exports.CellFormSelectComponent = CellFormSelectComponent;
//# sourceMappingURL=EditableFormSelect.js.map