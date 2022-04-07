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
import { useContext, useMemo } from 'react';
import { CellFormSelectComponent } from '../widgets/form-select/EditableFormSelect';
import { CellImagePickerComponent } from '../widgets/image-picker/EditableImagePicker';
import { CellNumberInputComponent } from '../widgets/number-input/EditableNumberInput';
import { CellSwitchComponent } from '../widgets/switch/EditableSwitch';
import { CellTextInputComponent } from '../widgets/text-input/EditableTextInput';
import { CellValueSetComponent } from '../widgets/value-set/EditableValueSet';
import { EditableCellContext, EditableContext } from './EditableContext';
export var WidgetMap = {
    TextInput: CellTextInputComponent,
    NumberInput: CellNumberInputComponent,
    Switch: CellSwitchComponent,
    ValueSet: CellValueSetComponent,
    FormSelect: CellFormSelectComponent,
    ImagePicker: CellImagePickerComponent,
};
function FallbackComponent() {
    return null;
}
export function EditableCellContentComponent(info) {
    var fieldId = info.item.fieldId;
    var widgetName = info.item.widgetName;
    var Component = FallbackComponent;
    if (widgetName && widgetName in WidgetMap) {
        Component = WidgetMap[widgetName];
    }
    console.warn('Please use new component');
    var _a = useContext(EditableContext), fields = _a.fields, dispatchField = _a.dispatchField;
    var field = useMemo(function () {
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
    return (_jsx(EditableCellContext.Provider, __assign({ value: field }, { children: _jsx(Component, __assign({}, info)) })));
}
//# sourceMappingURL=EditableCellContentComponent.js.map