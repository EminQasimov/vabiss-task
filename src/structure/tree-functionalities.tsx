import {
  Editing,
  Scrolling,
  Paging,
  Pager,
  SearchPanel,
  HeaderFilter,
  StateStoring,
  Sorting,
} from "devextreme-react/tree-list"

const allowedPageSizes = [5, 10, 20]

export const treeFunctionalities = [
  <Sorting mode="single" />,
  <Scrolling mode="standard" />,
  <Paging enabled={true} defaultPageSize={5} />,
  <Pager
    showPageSizeSelector={true}
    allowedPageSizes={allowedPageSizes}
    showInfo={true}
  />,
  <SearchPanel visible={true} width={250} />,
  <HeaderFilter visible={true} />,
  <StateStoring
    enabled={true}
    type="localStorage"
    storageKey="treeListState"
  />,
  <Editing allowUpdating={true} allowDeleting={true} allowAdding={true} />,
]
