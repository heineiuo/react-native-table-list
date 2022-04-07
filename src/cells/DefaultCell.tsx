import { ViewStyle } from 'react-native'

import { DefaultCellAccessoryComponent } from '../default-components/DefaultCellAccessoryComponent'
import { DefaultCellContentComponent } from '../default-components/DefaultCellContentComponent'
import { DefaultCellImageComponent } from '../default-components/DefaultCellImageComponent'
import { SectionCell } from './SectionCell'

export function DefaultCell(
  info: Record<string, any> & {
    style?: ViewStyle
  }
) {
  const { item } = info
  const {
    CellContentComponent = DefaultCellContentComponent,
    CellImageComponent = DefaultCellImageComponent,
    CellAccessoryComponent = DefaultCellAccessoryComponent,
  } = item

  return (
    <SectionCell {...info}>
      <CellImageComponent {...info} />
      <CellContentComponent {...info} />
      <CellAccessoryComponent {...info} />
    </SectionCell>
  )
}
