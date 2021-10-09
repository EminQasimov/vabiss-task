import { BrowserRouter, Route } from "react-router-dom"

import Nav from "./components/nav"
import Structure from "./structure"

import "devextreme/dist/css/dx.material.blue.light.css"
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
