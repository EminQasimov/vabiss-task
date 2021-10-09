import { Column, Lookup } from "devextreme-react/tree-list"
import { dataSource } from "../data-source"

export const structureColumn = (
  <Column dataField="parent_id" caption="Structure">
    <Lookup
      dataSource={{
        store: dataSource.store(),
      }}
      valueExpr="id"
      displayExpr="name"
    />
  </Column>
)
