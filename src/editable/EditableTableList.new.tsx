import { forwardRef, useEffect, useImperativeHandle, useReducer } from 'react'

import { TableList } from '../TableList.new'
import { BogeField } from '../boge'
import { EditableCellContentComponent } from './EditableCellContentComponent.new'
import { EditableContext } from './EditableContext'
import {
  EditableTableListMethods,
  EditableTableListNewProps,
  UpdateFieldReducer,
} from './EditableTypes'

function EditableTableListRender(
  props: EditableTableListNewProps,
  ref: any
): JSX.Element {
  const {
    readOnly,
    data,
    keyExtractor = (item, index) => item.fieldId || item.id || `${index}`,
    ...otherProps
  } = props

  const [fields, dispatchField] = useReducer<UpdateFieldReducer, BogeField[]>(
    (state, action) => {
      // console.log('dispatchField', state, action)
      // replace all items
      if (action.type === 'replace') {
        return action.payload
      }
      if (action.type === 'merge') {
        return action.payload.map((item) => {
          const current = state.find((item2) => item2.fieldId === item.fieldId)
          if (current) {
            return {
              ...item,
              ...current,
            } as BogeField
          }
          return item
        })
      }
      // update or push one item
      if (action.type === 'update') {
        const nextState = state.slice()
        let updated = false
        for (const field of nextState) {
          if (field.fieldId === action.payload.fieldId) {
            updated = true
            Object.assign(field, action.payload)
            break
          }
        }
        if (!updated) {
          nextState.push(action.payload)
        }
        return nextState
      }
      return state
    },
    [],
    (arg) => {
      return arg
    }
  )

  useImperativeHandle<EditableTableListMethods, EditableTableListMethods>(
    ref,
    () => {
      return {
        validate() {
          for (const item of fields) {
            const required = item.required ?? false
            if (required) {
              if (typeof item.value === 'undefined' || item.value === null) {
                return new Error(`${item.fieldId} is required`)
              }
            }
          }
          return fields
        },
        getFields() {
          return fields
        },
        getValueMap() {
          return fields.reduce((left, right) => {
            left[right.fieldId] = right.value
            return left
          }, {} as Record<string, any>)
        },
      }
    },
    [fields]
  )

  useEffect(() => {
    if (Array.isArray(data)) {
      dispatchField({
        type: 'merge',
        payload: data,
      })
    }
  }, [data])

  return (
    <EditableContext.Provider
      value={{
        fields,
        dispatchField,
      }}
    >
      <TableList
        keyExtractor={keyExtractor}
        {...otherProps}
        data={fields}
        CellContentComponent={EditableCellContentComponent}
      />
    </EditableContext.Provider>
  )
}

export const EditableTableList = forwardRef(EditableTableListRender)
