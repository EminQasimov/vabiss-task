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
} from "devextreme-react/tree-list"
import { Template } from "devextreme-react/core/template"
import { employees } from "./data"

const allowedPageSizes = [5, 10, 20]

function StatusCell(options) {
  return options.data?.status ? "Active" : "Deactive"
}

export default function Structure() {
  return (
    <div id="tree-list-demo">
      <TreeList
        id="employees"
        dataSource={employees}
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
              store: employees,
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
