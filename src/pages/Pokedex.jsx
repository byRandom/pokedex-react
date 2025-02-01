import React from 'react'
import { PokemonList } from '../components/PokemonList'

export const Pokedex = ({pokemonListState}) => {
  return (
    <>
        <PokemonList pokemonListState={pokemonListState}/>
    </>
  )
}
