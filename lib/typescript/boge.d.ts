import type { FC } from 'react';
export declare type BogeValueType = string | boolean | number | null;
export declare type BogeValueTypeName = 'string' | 'boolean' | 'number' | 'object';
export declare type MongoDocumentify<T> = {
    _id: string;
} & T;
export declare type BogeLocale = {
    locale: 'zh' | 'en' | 'ja';
    value: string;
};
export declare type BogePaging = {
    skip?: number;
    limit?: number;
    sort?: Record<string, number>;
    after?: Record<string, unknown>;
};
export declare type BogeWidgetDisplayMode = 'marketplace' | 'config' | 'edit' | 'table' | 'card' | 'view';
/**
 * 默认的prop
 */
export declare type BogeInternalPropName = 'readOnly' | 'value' | 'checked' | 'disabled' | 'required' | 'defaultValue';
export declare type BogeWidgetPropType = {
    propName: string;
    propType: BogeValueTypeName;
    /**
     * @deprecated
     */
    type: BogeValueTypeName;
    label: string;
    description: string;
    /**
     * @deprecated
     */
    configable: boolean;
    /**
     * @deprecated
     */
    editable: boolean;
};
export declare type BogeWidgetProp = {
    propName: string;
    /**
     * deprecated
     */
    value: any;
    propValue: any;
};
export declare type BogeWidget = {
    widgetName: string;
    displayName?: string;
    widgetId?: string;
    label?: string;
    description?: string;
    scopeId?: string | null;
    propTypes?: BogeWidgetPropType[];
    /**
     * @deprecated
     */
    defaultProps?: BogeWidgetProp[];
    props?: BogeWidgetProp[];
};
declare type BogeFieldSingleValue = string | boolean | number | Record<string, unknown>;
export declare type BogeFieldValue = BogeFieldSingleValue | BogeFieldSingleValue[];
export declare type BogeWidgetName = 'TextInput' | 'Switch' | 'ValueSet' | 'FormSelect' | 'NumberInput' | 'ImagePicker';
export declare type BogeBaseField<V = BogeFieldValue> = {
    fieldId: string;
    widgetName: BogeWidgetName;
    title: string;
    subtitle?: string;
    value?: V;
    readOnly?: boolean;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
};
export declare type BogeTextInputField = BogeBaseField<string> & {
    widgetName: 'TextInput';
    numberOfLines?: number;
};
/**
 * 开关选择器
 */
export declare type BogeSwitchField = BogeBaseField & {
    widgetName: 'Switch';
};
/**
 * 表单选择器
 * 实际上这个没什么用途，应该是表单数据选择器
 */
export declare type BogeFormSelectField = BogeBaseField & {
    widgetName: 'FormSelect';
};
/**
 * 数据字典选择器
 */
export declare type BogeValueSetField = BogeBaseField & {
    widgetName: 'ValueSet';
    setName?: string;
};
/**
 * 图片选择器
 */
export declare type BogeImagePickerField = BogeBaseField<{
    uri: string;
    remoteUri: string;
    [x: string]: any;
}[]> & {
    widgetName: 'ImagePicker';
    /**
     * 可选择图片数量，默认为1
     */
    limit: number;
};
/**
 * Unite all fields
 */
export declare type BogeField = BogeTextInputField | BogeSwitchField | BogeFormSelectField | BogeValueSetField | BogeImagePickerField;
/**
 * @deprecated
 */
export declare type BogeWidgetComponent = FC<{
    mode: BogeWidgetDisplayMode;
    fieldId: string;
}>;
/**
 * @deprecated
 */
export declare type BogeFieldValueType = 'switch' | 'text' | 'form' | 'valueSet';
/**
 * @deprecated
 */
export declare type BogeFormFieldProp<ValueT extends unknown> = {
    propName: string;
    valueType: BogeFieldValueType;
    configable: boolean;
    editable: boolean;
    /**
     * defaultValue 默认值 首先是configValue的默认值，
     * 如果configValue没设置，那同时也是editValue的默认值
     */
    defaultValue?: ValueT;
    /**
     * configValue 配置值，是editValue的默认值
     */
    configValue?: ValueT;
    /**
     * formdata内录入的值
     */
    editValue?: ValueT;
};
/**
 * @deprecated
 */
export declare type BogeFormField = {
    fieldId: string;
    title?: string;
    subtitle?: string;
    props: BogeFormFieldProp<unknown>[];
};
export declare type BogeForm = {
    appId: string;
    formType: string | null;
    formName: string;
    formId: string;
    title: string;
    subtitle: string;
    fields: BogeField[];
    public: boolean;
};
export declare type BogeFormGroup = {
    formList: BogeForm[];
    formType: string | null;
};
export declare type BogeFormData = {
    /**
     * @deprecated
     */
    scopeId: string;
    appId: string;
    formId: string;
    formDataId: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 副标题
     */
    subtitle: string;
    fields: BogeField[];
    public: boolean;
    createUserId: string;
    createTime: Date;
};
/**
 * @deprecated
 */
export declare type BogeFormDataFieldInput = BogeFormField;
/**
 * @deprecated
 */
export declare type BogeFormFieldInput = BogeFormField;
export declare type BogeAutomationStep = {
    type: 'modify';
    target: {
        fieldId: string;
        propName: string;
    };
    value: any;
} | {
    type: 'define';
    variableName: string;
    variableType: 'context' | 'function' | 'constant';
    value: any;
};
export declare type BogeAutomation = {
    formId: string;
    where: 'client' | 'server';
    fieldId: string;
    propName: string;
    event: 'change';
    steps: BogeAutomationStep[];
};
export declare type BogeWorkflow = {
    formId: string;
    nodes: any[];
};
export declare type BogeValueSet = {
    appId: string;
    value: string;
    label: string;
    description: string;
    disabled?: boolean;
};
/**
 * @deprecated
 */
export declare type BogeFieldProps<T> = {
    fieldId: string;
    widgetId: string;
    mode: BogeWidgetDisplayMode;
    label: BogeLocale[];
    description: BogeLocale[];
    propTypes: BogeWidgetPropType[];
    defaultProps: BogeWidgetProp[];
    configProps: BogeWidgetProp[];
    editProps: BogeWidgetProp[];
};
/**
 * Does it needful?
 */
export declare type SpreadsheetDocument = {
    ownerId: string;
};
export declare type SheetDocument = {
    title: string;
    ownerId: string;
    sheetId: string;
};
export declare type RowDocument = {
    title: string;
    sheetId: string;
    rowId: string;
};
export declare type ColumnDocument = {
    title: string;
    sheetId: string;
    columnId: string;
};
export declare type CellDocument = {
    sheetId: string;
    rowId: string;
    columnId: string;
};
export declare type UserSheetCustomDocument = {
    columnSort: string[];
    columnHidden: string[];
};
export {};
