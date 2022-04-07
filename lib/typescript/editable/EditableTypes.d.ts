import { TableListProps, TableListPropsNew } from '../TableListTypes';
import { BogeField, BogeFieldValue } from '../boge';
export declare type UpdateFieldAction = {
    type: 'update';
    payload: BogeField;
} | {
    type: 'replace';
    payload: BogeField[];
} | {
    type: 'merge';
    payload: BogeField[];
};
export declare type UpdateFieldReducer = (state: BogeField[], action: UpdateFieldAction) => BogeField[];
export declare type EditableContextState = {
    fields: BogeField[];
    dispatchField: (action: UpdateFieldAction) => void;
};
export declare type EditableTableListProps = TableListProps<BogeField, Record<string, unknown>, {
    editing?: boolean;
}>;
export declare type EditableTableListNewProps = TableListPropsNew<BogeField & Record<string, any>> & {
    readOnly?: boolean;
};
export declare type EditableTableListMethods = {
    getFields(): BogeField[];
    validate(): Error | BogeField[];
    getValueMap(): Record<string, BogeFieldValue | void>;
};
