import { BogeField, BogeFieldValue, BogeFieldValueType } from '../../types'
import { TableListProps, TableListPropsNew } from '../TableListTypes'

export type UpdateFieldAction =
  | {
      type: 'update'
      payload: BogeField
    }
  | {
      type: 'replace'
      payload: BogeField[]
    }
  | {
      type: 'merge'
      payload: BogeField[]
    }

export type UpdateFieldReducer = (
  state: BogeField[],
  action: UpdateFieldAction
) => BogeField[]

export type EditableContextState = {
  fields: BogeField[]
  dispatchField: (action: UpdateFieldAction) => void
}

export type EditableTableListProps = TableListProps<
  BogeField,
  Record<string, unknown>,
  { editing?: boolean }
>

export type EditableTableListNewProps = TableListPropsNew<
  BogeField & Record<string, any>
> & {
  readOnly?: boolean
}

export type EditableTableListMethods = {
  getFields(): BogeField[]
  validate(): Error | BogeField[]
  getValueMap(): Record<string, BogeFieldValue | void>
}
