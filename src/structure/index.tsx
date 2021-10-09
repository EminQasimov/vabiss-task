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
  RequiredRule,
  StringLengthRule,
  PatternRule,
  AsyncRule,
  Button,
} from "devextreme-react/tree-list"
import { Template } from "devextreme-react/core/template"
import Switch from "devextreme-react/switch"

import { employees } from "./data"
import { dataSource } from "./store"

const allowedPageSizes = [5, 10, 20]
const namePattern = /^[^0-9]+$/

function StatusCell(options: any) {
  return options.data?.status ? "Active" : "Deactive"
}

function renderSwitch(cellInfo: any) {
  return (
    <Switch
      width={80}
      switchedOnText="Active"
      switchedOffText="Deactive"
      defaultValue={cellInfo.value}
      onValueChanged={(valueChangedEventArg) => {
        cellInfo.setValue(valueChangedEventArg.value)
      }}
    />
  )
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

  function validateNameUniqueness({ value, data }: any) {
    return dataSource
      .store()
      .load()
      .then((items: any[]) => {
        const found = items.find((item) => item.name === value)
        return !(found && found.id !== data.id)
      })
  }

  return (
    <div>
      <button onClick={populateFakeData}>Populate fake data</button>
      <button onClick={resetLocalStorage}>Reset all state and storage</button>

      <TreeList
        id="tree-list"
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

        <Column dataField="name">
          <RequiredRule />
          <StringLengthRule
            min={3}
            message="Name should be at least 3 symbols long"
          />
          <StringLengthRule
            max={30}
            message="Name should be at most 30 symbols long"
          />
          <PatternRule
            message="Do not use digits in the Name"
            pattern={namePattern}
          />
          <AsyncRule
            message="Name is already taken, it must be unique"
            validationCallback={validateNameUniqueness}
          />
        </Column>

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
          editCellRender={renderSwitch}
        />
        <Template name="employeeTemplate" render={StatusCell} />

        <Column type="buttons">
          <Button
            name="edit"
            icon="icon icon-edit"
            cssClass="custom-icon custom-icon-edit"
          />
          <Button
            name="delete"
            icon="icon icon-delete"
            cssClass="custom-icon custom-icon-delete"
          />
          <Button
            name="save"
            icon="icon icon-save"
            cssClass="custom-icon custom-icon-save"
          />
          <Button
            name="cancel"
            icon="icon icon-cancel"
            cssClass="custom-icon custom-icon-cancel"
          />
        </Column>
      </TreeList>
    </div>
  )
}
