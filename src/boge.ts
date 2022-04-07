import type { FC } from 'react'

export type BogeValueType = string | boolean | number | null
export type BogeValueTypeName = 'string' | 'boolean' | 'number' | 'object'

export type MongoDocumentify<T> = { _id: string } & T

export type BogeLocale = {
  locale: 'zh' | 'en' | 'ja'
  value: string
}

export type BogePaging = {
  skip?: number
  limit?: number
  sort?: Record<string, number>
  after?: Record<string, unknown>
}

export type BogeWidgetDisplayMode =
  | 'marketplace'
  | 'config'
  | 'edit'
  | 'table'
  | 'card'
  | 'view'

/**
 * 默认的prop
 */
export type BogeInternalPropName =
  | 'readOnly'
  | 'value'
  | 'checked'
  | 'disabled'
  | 'required'
  | 'defaultValue'

export type BogeWidgetPropType = {
  // InternalBogePropName
  propName: string
  propType: BogeValueTypeName
  /**
   * @deprecated
   */
  type: BogeValueTypeName
  label: string
  description: string
  /**
   * @deprecated
   */
  configable: boolean
  /**
   * @deprecated
   */
  editable: boolean
}

export type BogeWidgetProp = {
  propName: string
  /**
   * deprecated
   */
  value: any
  propValue: any
}

// collection widgets
export type BogeWidget = {
  widgetName: string
  displayName?: string
  widgetId?: string
  label?: string
  description?: string
  scopeId?: string | null
  propTypes?: BogeWidgetPropType[]
  /**
   * @deprecated
   */
  defaultProps?: BogeWidgetProp[]
  props?: BogeWidgetProp[]
}

type BogeFieldSingleValue = string | boolean | number | Record<string, unknown>

export type BogeFieldValue = BogeFieldSingleValue | BogeFieldSingleValue[]

export type BogeWidgetName =
  | 'TextInput'
  | 'Switch'
  | 'ValueSet'
  | 'FormSelect'
  | 'NumberInput'
  | 'ImagePicker'

export type BogeBaseField<V = BogeFieldValue> = {
  fieldId: string
  widgetName: BogeWidgetName
  title: string
  subtitle?: string
  value?: V
  readOnly?: boolean
  required?: boolean
  disabled?: boolean
  multiline?: boolean
}

export type BogeTextInputField = BogeBaseField<string> & {
  widgetName: 'TextInput'
  numberOfLines?: number
}

/**
 * 开关选择器
 */
export type BogeSwitchField = BogeBaseField & {
  widgetName: 'Switch'
}

/**
 * 表单选择器
 * 实际上这个没什么用途，应该是表单数据选择器
 */
export type BogeFormSelectField = BogeBaseField & {
  widgetName: 'FormSelect'
}

/**
 * 数据字典选择器
 */
export type BogeValueSetField = BogeBaseField & {
  widgetName: 'ValueSet'
  setName?: string
}

/**
 * 图片选择器
 */
export type BogeImagePickerField = BogeBaseField<
  { uri: string; remoteUri: string; [x: string]: any }[]
> & {
  widgetName: 'ImagePicker'
  /**
   * 可选择图片数量，默认为1
   */
  limit: number
}

/**
 * Unite all fields
 */
export type BogeField =
  | BogeTextInputField
  | BogeSwitchField
  | BogeFormSelectField
  | BogeValueSetField
  | BogeImagePickerField

/**
 * @deprecated
 */
export type BogeWidgetComponent = FC<{
  mode: BogeWidgetDisplayMode
  fieldId: string
}>

/**
 * @deprecated
 */
export type BogeFieldValueType = 'switch' | 'text' | 'form' | 'valueSet'

/**
 * @deprecated
 */
export type BogeFormFieldProp<ValueT extends unknown> = {
  propName: string
  valueType: BogeFieldValueType
  configable: boolean
  editable: boolean
  /**
   * defaultValue 默认值 首先是configValue的默认值，
   * 如果configValue没设置，那同时也是editValue的默认值
   */
  defaultValue?: ValueT
  /**
   * configValue 配置值，是editValue的默认值
   */
  configValue?: ValueT
  /**
   * formdata内录入的值
   */
  editValue?: ValueT
}

/**
 * @deprecated
 */
export type BogeFormField = {
  fieldId: string
  title?: string
  subtitle?: string
  props: BogeFormFieldProp<unknown>[]
}

// collection widgets
export type BogeForm = {
  appId: string
  formType: string | null
  formName: string
  formId: string
  title: string
  subtitle: string
  fields: BogeField[]
  public: boolean
}

export type BogeFormGroup = { formList: BogeForm[]; formType: string | null }

export type BogeFormData = {
  /**
   * @deprecated
   */
  scopeId: string

  appId: string

  formId: string

  formDataId: string

  /**
   * 标题
   */
  title: string

  /**
   * 副标题
   */
  subtitle: string

  fields: BogeField[]

  public: boolean

  createUserId: string

  createTime: Date
}

/**
 * @deprecated
 */
export type BogeFormDataFieldInput = BogeFormField

/**
 * @deprecated
 */
export type BogeFormFieldInput = BogeFormField

export type BogeAutomationStep =
  | {
      type: 'modify'
      target: {
        fieldId: string
        propName: string
      }
      value: any
    }
  | {
      type: 'define'
      variableName: string
      variableType: 'context' | 'function' | 'constant'
      value: any
    }

export type BogeAutomation = {
  formId: string
  where: 'client' | 'server'
  fieldId: string
  propName: string
  event: 'change'
  steps: BogeAutomationStep[]
}

export type BogeWorkflow = {
  formId: string
  // tree
  nodes: any[]
}

export type BogeValueSet = {
  appId: string
  value: string
  label: string
  description: string
  disabled?: boolean
}

/**
 * @deprecated
 */
export type BogeFieldProps<T> = {
  fieldId: string
  widgetId: string
  mode: BogeWidgetDisplayMode
  label: BogeLocale[]
  description: BogeLocale[]
  propTypes: BogeWidgetPropType[]
  defaultProps: BogeWidgetProp[]
  configProps: BogeWidgetProp[]
  editProps: BogeWidgetProp[]
}

/**
 * Does it needful?
 */
export type SpreadsheetDocument = {
  ownerId: string
}

export type SheetDocument = {
  title: string
  ownerId: string
  sheetId: string
}

export type RowDocument = {
  title: string
  sheetId: string
  rowId: string
}

export type ColumnDocument = {
  title: string
  sheetId: string
  columnId: string
}

export type CellDocument = {
  sheetId: string
  rowId: string
  columnId: string
}

export type UserSheetCustomDocument = {
  columnSort: string[]
  columnHidden: string[]
}
