import React from "react"
import  { BrowserRouter, Link, Routes, Route} from "react-router-dom"
import { Home } from "./vistas/Home"
import { Hola } from "./components"

//const Home = () => <h1 style={{ backgroundColor: 'red' }}>JJHJJJ</h1>
//const Hola = () => <h1>Hola</h1>

const inlineStyles = {
    padding: 5,
}

const App = () => {
    return (
      <BrowserRouter>
        {/*<header>
          <Link to="/" style={{ backgroundColor: 'lightblue' }}>Home</Link>
          <Link to="/Hola">Hola</Link>
    </header>*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hola" element={<Hola />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default App;