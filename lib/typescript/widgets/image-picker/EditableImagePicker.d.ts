/// <reference types="react" />
import { TableListCellCustomComponentProps } from '../../TableListTypes';
import { BogeFieldValueType } from '../../boge';
export declare function CellImagePickerComponent(props: {
    upload: any;
} & TableListCellCustomComponentProps<{
    id: string;
    valueType: BogeFieldValueType;
    required?: boolean;
    upload: any;
}, any>): JSX.Element;
