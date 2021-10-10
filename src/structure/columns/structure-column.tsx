import { Column, Lookup } from "devextreme-react/tree-list"
import { dataSource } from "../data-source"

function buildFilters(ids: number[]) {
  const filters = ids.reduce((acc, id, index) => {
    if (index !== 0) {
      acc.push("and")
    }
    acc.push(["id", "<>", id])
    return acc
  }, [] as any[])

  return filters
}

// 🙄 loop tree items to collect child ids
function getInvalidStructureIds(children = []) {
  const invalidStructureIds: number[] = []

  function traverse(nodes: any[]) {
    nodes.forEach((item) => {
      invalidStructureIds.push(item.key)

      if (item.hasChildren) {
        traverse(item.children)
      }
    })
  }

  traverse(children)

  return invalidStructureIds
}

// remove child structures by filtering, so users can't choose them as parent from select
function getFilteredData(options: any) {
  const { data, key } = options
  const store = dataSource.store()

  if (data) {
    const invalidStructureIds = getInvalidStructureIds(options.node?.children)
    // user shouldn't choose itself as a parent
    const filters = buildFilters([...invalidStructureIds, key])

    return {
      store,
      filter: filters.length > 0 ? filters : null,
    }
  }

  return {
    store,
    filter: null,
  }
}

export const structureColumn = (
  <Column dataField="parent_id" caption="Structure">
    <Lookup
      dataSource={getFilteredData}
      valueExpr="id"
      displayExpr={"name"}
      allowClearing
    />
  </Column>
)
