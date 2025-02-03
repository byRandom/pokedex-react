import { NavBar } from './components/NavBar'
import { Pokedex } from './pages/Pokedex'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import './styles.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
