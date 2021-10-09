import { Button } from "devextreme-react/button"

import { employees } from "./fake-data"
import { dataSource } from "../data-source"

export default function DebugHelperButtons() {
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
    <div>
      <Button
        text="Generate fake data"
        type="default"
        stylingMode="text"
        onClick={populateFakeData}
      />
      <Button
        text="Reset all state and storage"
        type="danger"
        stylingMode="text"
        onClick={resetLocalStorage}
      />
    </div>
  )
}
