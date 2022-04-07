/// <reference types="react" />
import { TableListCellCustomComponentProps } from '../../TableListTypes';
import { BogeFieldValueType } from '../../boge';
export declare function CellTextInputComponent(props: TableListCellCustomComponentProps<{
    id: string;
    valueType: BogeFieldValueType;
    required?: boolean;
}, any>): JSX.Element;
