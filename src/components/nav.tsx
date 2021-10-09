import { useState } from "react"
import { useHistory } from "react-router-dom"
import Tabs from "devextreme-react/tabs"

export const tabs = [
  {
    id: 0,
    text: "Home",
    icon: "home",
  },
  {
    id: 1,
    text: "Structure",
    icon: "tableproperties",
  },
]

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState()
  let history = useHistory()

  function onTabsSelectionChanged(args) {
    if (args.name == "selectedIndex") {
      setSelectedIndex(args.value)
    }

    if (args.value === 0) {
      history.push("/")
    }

    if (args.value === 1) {
      history.push("/structure")
    }
  }

  return (
    <nav>
      <Tabs
        dataSource={tabs}
        selectedIndex={selectedIndex}
        onOptionChanged={onTabsSelectionChanged}
      />
    </nav>
  )
}
