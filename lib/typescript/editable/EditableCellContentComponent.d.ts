/// <reference types="react" />
import { SectionListRenderItemInfo } from 'react-native';
import { TableListSection, TableListSectionDataItem } from '../TableListTypes';
import { BogeField } from '../boge';
import { CellFormSelectComponent } from '../widgets/form-select/EditableFormSelect';
import { CellImagePickerComponent } from '../widgets/image-picker/EditableImagePicker';
import { CellNumberInputComponent } from '../widgets/number-input/EditableNumberInput';
import { CellSwitchComponent } from '../widgets/switch/EditableSwitch';
import { CellTextInputComponent } from '../widgets/text-input/EditableTextInput';
import { CellValueSetComponent } from '../widgets/value-set/EditableValueSet';
export declare const WidgetMap: {
    readonly TextInput: typeof CellTextInputComponent;
    readonly NumberInput: typeof CellNumberInputComponent;
    readonly Switch: typeof CellSwitchComponent;
    readonly ValueSet: typeof CellValueSetComponent;
    readonly FormSelect: typeof CellFormSelectComponent;
    readonly ImagePicker: typeof CellImagePickerComponent;
};
export declare function EditableCellContentComponent(info: SectionListRenderItemInfo<TableListSectionDataItem<BogeField, Record<string, unknown>>, TableListSection<Record<string, unknown>>>): JSX.Element;
