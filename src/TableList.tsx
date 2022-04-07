import { createElement } from 'react'

import { TableList as TableListNew } from './TableList.new'
import { TableList as TableListOld } from './TableList.old'

export function TableList(props) {
  if (props.sections) {
    return createElement(TableListOld, props)
  }

  return createElement(TableListNew, props)
}
