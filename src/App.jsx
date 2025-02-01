import * as PokedexWrapper from 'pokeapi-js-wrapper'
import { useLayoutEffect, useMemo, useState } from 'react'
import { NavBar } from './components/NavBar'
import { Pokedex } from './pages/Pokedex'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import './styles.css'
function App() {
  const [pokemonListState, setPokemonList] = useState([])
  
  
  const getPokemons = async () => {
    if(pokemonListState.length === 0) {
      console.log("UseLayoutEffect:", pokemonListState.length)
      const p = new PokedexWrapper.Pokedex()
      p.getPokemonsList().then((response) => {
        let pokemon = response.results
        pokemon.forEach((element) => {
          element.Id = element.url.split('/')[6]
        }
        )
        console.log("UseLayoutEffect:", pokemon)
        setPokemonList(pokemon)
      })
    }
  }

  const pokeData = useMemo(async () => getPokemons, [pokemonListState])

  useLayoutEffect(() => {
    getPokemons()
  }, [pokeData])
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex pokemonListState={pokemonListState} />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
