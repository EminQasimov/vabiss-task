import {
  TreeList,
  Editing,
  Column,
  Lookup,
  Scrolling,
  Paging,
  Pager,
  SearchPanel,
  HeaderFilter,
  StateStoring,
} from "devextreme-react/tree-list"
import { Template } from "devextreme-react/core/template"
import { employees } from "./data"
import { dataSource } from "./store"

const allowedPageSizes = [5, 10, 20]

function StatusCell(options: any) {
  return options.data?.status ? "Active" : "Deactive"
}

export default function Structure() {
  function populateFakeData() {
    employees.forEach((item) => {
      dataSource.store().insert({ ...item })
    })
    dataSource.reload()
  }

  function resetLocalStorage() {
    localStorage.clear()
    dataSource.store().clear()
    dataSource.reload()
  }

  return (
    <div id="tree-list-demo">
      <button onClick={populateFakeData}>Populate fake data</button>
      <button onClick={resetLocalStorage}>Reset all state and storage</button>

      <TreeList
        id="employees"
        dataSource={dataSource}
        showRowLines={true}
        showBorders={true}
        columnAutoWidth={true}
        keyExpr="id"
        parentIdExpr="parent_id"
      >
        <Scrolling mode="standard" />
        <Paging enabled={true} defaultPageSize={5} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
          showInfo={true}
        />
        <SearchPanel visible={true} width={250} />
        <HeaderFilter visible={true} />

        <StateStoring
          enabled={true}
          type="localStorage"
          storageKey="treeListState"
        />

        <Editing
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
          // mode="popup"
        />

        <Column dataField="name"></Column>

        <Column dataField="parent_id" caption="Structure">
          <Lookup
            dataSource={{
              store: dataSource.store(),
            }}
            valueExpr="id"
            displayExpr="name"
          />
        </Column>

        <Column
          dataField="status"
          cellTemplate="employeeTemplate"
          width={300}
        />
        <Template name="employeeTemplate" render={StatusCell} />
      </TreeList>
    </div>
  )
}
