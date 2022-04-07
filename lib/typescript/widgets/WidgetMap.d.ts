import { CellFormSelectComponent } from './form-select/EditableFormSelect';
import { CellImagePickerComponent } from './image-picker/EditableImagePicker';
import { CellNumberInputComponent } from './number-input/EditableNumberInput';
import { CellSwitchComponent } from './switch/EditableSwitch';
import { CellTextInputComponent } from './text-input/EditableTextInput';
import { CellValueSetComponent } from './value-set/EditableValueSet';
export declare const WidgetMap: {
    readonly TextInput: typeof CellTextInputComponent;
    readonly NumberInput: typeof CellNumberInputComponent;
    readonly Switch: typeof CellSwitchComponent;
    readonly ValueSet: typeof CellValueSetComponent;
    readonly FormSelect: typeof CellFormSelectComponent;
    readonly ImagePicker: typeof CellImagePickerComponent;
};
export declare type WidgetNames = keyof typeof WidgetMap;
