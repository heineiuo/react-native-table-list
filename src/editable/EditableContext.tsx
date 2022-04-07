import { createContext, useContext } from 'react'

import { BogeField } from '../boge'
import { EditableContextState } from './EditableTypes'

export const EditableContext = createContext({} as EditableContextState)

export type EditableCellContextState<T = BogeField> = T & {
  updateField: (field: Partial<BogeField>) => void
}

export const EditableCellContext = createContext({
  fieldId: '',
} as EditableCellContextState<any>)

export function useEditableCell<T = BogeField>() {
  return useContext(EditableCellContext) as EditableCellContextState<T>
}
