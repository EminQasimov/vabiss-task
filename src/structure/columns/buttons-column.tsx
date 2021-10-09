import { Column, Button } from "devextreme-react/tree-list"

export const buttonsColumn = (
  <Column type="buttons">
    <Button name="add" icon="add" cssClass="custom-icon" />

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
)
