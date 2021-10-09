import {
  Column,
  RequiredRule,
  StringLengthRule,
  PatternRule,
  AsyncRule,
} from "devextreme-react/tree-list"
import { dataSource } from "../data-source"

const namePattern = /^[^0-9]+$/
function validateNameUniqueness({ value, data }: any) {
  return dataSource
    .store()
    .load()
    .then((items: any[]) => {
      const found = items.find((item) => item.name === value)
      return !(found && found.id !== data.id)
    })
}

export const nameColumn = (
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
)
