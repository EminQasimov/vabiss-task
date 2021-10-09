import { BrowserRouter, Route, Link } from "react-router-dom"
import Structure from "./structure"
import Nav from "./components/nav"

import "devextreme/dist/css/dx.light.css"
import "./app.scss"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact>
        <div className="home">
          <img
            src="https://vabiss.com/wp-content/uploads/2019/05/vabiss-logo.png"
            alt="logo"
            className="vabiss-logo"
          />
        </div>
      </Route>
      <Route path="/structure">
        <Structure />
      </Route>
    </BrowserRouter>
  )
}

export default App
