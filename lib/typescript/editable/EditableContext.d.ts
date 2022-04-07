/// <reference types="react" />
import { BogeField } from '../boge';
import { EditableContextState } from './EditableTypes';
export declare const EditableContext: import("react").Context<EditableContextState>;
export declare type EditableCellContextState<T = BogeField> = T & {
    updateField: (field: Partial<BogeField>) => void;
};
export declare const EditableCellContext: import("react").Context<any>;
export declare function useEditableCell<T = BogeField>(): EditableCellContextState<T>;
