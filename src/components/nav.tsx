import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import Tabs from "devextreme-react/tabs"

export const tabs = [
  {
    id: 0,
    text: "Home",
    icon: "home",
  },
  {
    id: 1,
    text: "Go to Structure",
    icon: "tableproperties",
  },
]

export default function Nav() {
  let history = useHistory()
  let { pathname } = useLocation()
  const [selectedIndex, setSelectedIndex] = useState(() =>
    pathname === "/structure" ? 1 : 0
  )

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
