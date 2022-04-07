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
exports.EditableCellContentComponent = exports.WidgetMap = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var EditableFormSelect_1 = require("../widgets/form-select/EditableFormSelect");
var EditableImagePicker_1 = require("../widgets/image-picker/EditableImagePicker");
var EditableNumberInput_1 = require("../widgets/number-input/EditableNumberInput");
var EditableSwitch_1 = require("../widgets/switch/EditableSwitch");
var EditableTextInput_1 = require("../widgets/text-input/EditableTextInput");
var EditableValueSet_1 = require("../widgets/value-set/EditableValueSet");
var EditableContext_1 = require("./EditableContext");
exports.WidgetMap = {
    TextInput: EditableTextInput_1.CellTextInputComponent,
    NumberInput: EditableNumberInput_1.CellNumberInputComponent,
    Switch: EditableSwitch_1.CellSwitchComponent,
    ValueSet: EditableValueSet_1.CellValueSetComponent,
    FormSelect: EditableFormSelect_1.CellFormSelectComponent,
    ImagePicker: EditableImagePicker_1.CellImagePickerComponent,
};
function FallbackComponent() {
    return null;
}
function EditableCellContentComponent(info) {
    var fieldId = info.item.fieldId;
    var widgetName = info.item.widgetName;
    var Component = FallbackComponent;
    if (widgetName && widgetName in exports.WidgetMap) {
        Component = exports.WidgetMap[widgetName];
    }
    console.warn('Please use new component');
    var _a = (0, react_1.useContext)(EditableContext_1.EditableContext), fields = _a.fields, dispatchField = _a.dispatchField;
    var field = (0, react_1.useMemo)(function () {
        var field = fields.find(function (item) { return item.fieldId === fieldId; });
        if (!field) {
            throw new Error("Field not found id=".concat(fieldId));
        }
        var updateField = function (partialField) {
            var payload = __assign(__assign({}, field), partialField);
            dispatchField({
                type: 'update',
                payload: payload,
            });
        };
        return __assign(__assign({}, field), { updateField: updateField });
    }, [fieldId, dispatchField, fields]);
    return ((0, jsx_runtime_1.jsx)(EditableContext_1.EditableCellContext.Provider, __assign({ value: field }, { children: (0, jsx_runtime_1.jsx)(Component, __assign({}, info)) })));
}
exports.EditableCellContentComponent = EditableCellContentComponent;
//# sourceMappingURL=EditableCellContentComponent.js.map