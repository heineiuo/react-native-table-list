import { createElement, forwardRef } from 'react'

import { EditableTableList as EditableTableListNew } from './EditableTableList.new'
import { EditableTableList as EditableTableListOld } from './EditableTableList.old'

function EditableTableList1(props, ref) {
  if (props.sections) {
    return createElement(EditableTableListOld, { ...props, ref })
  }

  return createElement(EditableTableListNew, { ...props, ref })
}

export const EditableTableList = forwardRef(EditableTableList1)
