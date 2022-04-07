import { ReactComponentLike } from 'prop-types'

import { DefaultCellAccessoryComponent } from '../default-components/DefaultCellAccessoryComponent'
import { DefaultCellImageComponent } from '../default-components/DefaultCellImageComponent'
import { EditableCellContext } from '../editable/EditableContext'
import { WidgetMap } from '../widgets/WidgetMap'
import { SectionCell } from './SectionCell'

export function WidgetCell(info: any) {
  const { item, updateField } = info
  const {
    CellImageComponent = DefaultCellImageComponent,
    CellAccessoryComponent = DefaultCellAccessoryComponent,
  } = item

  let Widget: ReactComponentLike = () => null

  const widgetName = item.widgetName as keyof typeof WidgetMap
  if (widgetName in WidgetMap) {
    Widget = WidgetMap[widgetName]
  }

  return (
    <SectionCell {...info}>
      <CellImageComponent {...info} />
      <EditableCellContext.Provider
        value={{
          ...item,
          updateField,
        }}
      >
        <Widget {...info} />
      </EditableCellContext.Provider>
      <CellAccessoryComponent {...info} />
    </SectionCell>
  )
}
