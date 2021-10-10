import { TreeList } from "devextreme-react/tree-list"
import { dataSource } from "./data-source"
import {
  buttonsColumn,
  nameColumn,
  statusColumn,
  structureColumn,
} from "./columns"
import { treeFunctionalities } from "./tree-functionalities"
import DebugHelperButtons from "./debug-helper-buttons"

function Structure() {
  return (
    <>
      <DebugHelperButtons />

      <TreeList
        id="tree-list"
        dataSource={dataSource}
        showRowLines={true}
        showBorders={true}
        columnAutoWidth={true}
        keyExpr="id"
        parentIdExpr="parent_id"
        onInitNewRow={(e) => {
          e.data.id = undefined
          e.data.name = undefined

          if (!e.data.parent_id) {
            e.data.parent_id = undefined
          }
        }}
      >
        {treeFunctionalities}
        {nameColumn}
        {structureColumn}
        {statusColumn}
        {buttonsColumn}
      </TreeList>
    </>
  )
}

export default Structure
