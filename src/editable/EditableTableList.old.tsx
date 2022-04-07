import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useReducer,
} from 'react'

import { BogeField, BogeFieldValue } from '../../types'
import { TableList } from '../TableList'
import { EditableCellContentComponent } from './EditableCellContentComponent'
import { EditableContext } from './EditableContext'
import {
  EditableTableListMethods,
  EditableTableListProps,
  UpdateFieldReducer,
} from './EditableTypes'

function EditableTableListRender(
  props: EditableTableListProps,
  ref: any
): JSX.Element {
  const { editing, sections, ...otherProps } = props

  const [fields, dispatchField] = useReducer<UpdateFieldReducer, null>(
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
    null,
    () => {
      const initFields: BogeField[] = []
      for (const section of sections) {
        const { data } = section
        if (data) {
          for (const item of data) {
            initFields.push(item)
          }
        }
      }
      return initFields
    }
  )

  /**
   * keep sections simple
   * 1. remove renderItem
   * 2. set activityOpacity to 1
   * 3. add CellContentComponent
   */
  const processSections = useMemo(() => {
    // return sections.map((section) => {
    //   return {
    //     ...section,
    //     renderItem: undefined,
    //     data: section.data.map((item) => {
    //       return {
    //         ...item,
    //         activeOpacity: 1,
    //         CellContentComponent: EditableCellContentComponent,
    //       }
    //     }),
    //   }
    // })
    return [
      {
        id: 'fields',
        renderItem: undefined,
        data: fields.map((item) => {
          return {
            ...item,
            activeOpacity: 1,
            CellContentComponent: EditableCellContentComponent,
          }
        }),
      },
    ]
  }, [fields])

  useImperativeHandle<EditableTableListMethods, EditableTableListMethods>(
    ref,
    () => {
      return {
        validate() {
          for (const section of processSections) {
            for (const item of section.data) {
              const required = item.required ?? false
              if (required) {
                const target = fields.find(
                  (fieldItem) => fieldItem.fieldId === item.fieldId
                )
                if (
                  !target ||
                  typeof target.value === 'undefined' ||
                  target.value === null
                ) {
                  return new Error(`${item.fieldId} is required`)
                }
              }
            }
          }
          return fields
        },
        getFields() {
          return fields
        },
        getValueMap() {
          const result: Record<string, BogeFieldValue | void> = {}
          for (const field of fields) {
            result[field.fieldId] = field.value
          }
          return result
        },
      }
    },
    [fields, processSections]
  )

  // useEffect(() => {
  //   dispatchField({
  //     type: 'merge',
  //     payload: sections[0].data,
  //   })
  // }, [sections])

  return (
    <EditableContext.Provider
      value={{
        fields,
        dispatchField,
      }}
    >
      <TableList
        keyExtractor={(item, index) => item.fieldId || item.id || `${index}`}
        {...otherProps}
        sections={processSections}
      />
    </EditableContext.Provider>
  )
}

export const EditableTableList = forwardRef(EditableTableListRender)
