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
  function onInitNewRow(e) {
    e.data.id = undefined
    e.data.name = undefined
    e.data.parent_id = undefined
  }
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
        onInitNewRow={onInitNewRow}
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
