import LocalStore from "devextreme/data/local_store"
import DataSource from "devextreme/data/data_source"

const store = new LocalStore({
  key: "id",
  name: "tree-list-local-data",
  immediate: true,
})

export const dataSource = new DataSource({
  store,
})
