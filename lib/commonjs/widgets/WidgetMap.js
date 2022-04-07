"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetMap = void 0;
var EditableFormSelect_1 = require("./form-select/EditableFormSelect");
var EditableImagePicker_1 = require("./image-picker/EditableImagePicker");
var EditableNumberInput_1 = require("./number-input/EditableNumberInput");
var EditableSwitch_1 = require("./switch/EditableSwitch");
var EditableTextInput_1 = require("./text-input/EditableTextInput");
var EditableValueSet_1 = require("./value-set/EditableValueSet");
exports.WidgetMap = {
    TextInput: EditableTextInput_1.CellTextInputComponent,
    NumberInput: EditableNumberInput_1.CellNumberInputComponent,
    Switch: EditableSwitch_1.CellSwitchComponent,
    ValueSet: EditableValueSet_1.CellValueSetComponent,
    FormSelect: EditableFormSelect_1.CellFormSelectComponent,
    ImagePicker: EditableImagePicker_1.CellImagePickerComponent,
};
//# sourceMappingURL=WidgetMap.js.map