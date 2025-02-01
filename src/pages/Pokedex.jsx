import React from 'react'
import { PokemonList } from '../Components/PokemonList'

export const Pokedex = ({pokemonListState}) => {
  return (
    <>
        <PokemonList pokemonListState={pokemonListState}/>
    </>
  )
}
