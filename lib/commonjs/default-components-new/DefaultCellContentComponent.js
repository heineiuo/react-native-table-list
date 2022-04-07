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
exports.DefaultCellContentComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_platform_color_1 = require("react-native-platform-color");
var EditableContext_1 = require("../editable/EditableContext");
var useColors_1 = require("../useColors");
var WidgetMap_1 = require("../widgets/WidgetMap");
function FallbackComponent() {
    return null;
}
function DefaultCellContentComponent(props) {
    var colors = (0, useColors_1.useColors)();
    var item = props.item;
    var fieldId = item.fieldId, detail = item.detail, _a = item.title, title = _a === void 0 ? '' : _a;
    var detailElement = detail;
    (0, react_native_1.useColorScheme)();
    var _b = (0, react_1.useContext)(EditableContext_1.EditableContext), fields = _b.fields, dispatchField = _b.dispatchField;
    var widgetName = item.widgetName;
    var Component = FallbackComponent;
    if (widgetName && widgetName in WidgetMap_1.WidgetMap) {
        Component = WidgetMap_1.WidgetMap[widgetName];
    }
    if (typeof detailElement === 'string') {
        detailElement = ((0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: {
                color: (0, react_native_platform_color_1.PlatformColor)('label'),
            } }, { children: detail })));
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: {
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
        } }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: { color: colors.text } }, { children: title })), (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                    paddingLeft: 10,
                    justifyContent: 'space-between',
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                        flex: 1,
                        overflow: 'hidden',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    } }, { children: detailElement })) }))] })));
}
exports.DefaultCellContentComponent = DefaultCellContentComponent;
//# sourceMappingURL=DefaultCellContentComponent.js.map