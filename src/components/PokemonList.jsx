import React from 'react'
import { Accordion } from './Accordion'

export const PokemonList = ({pokemonListState}) => {
  return (
    <section className='nes-container is-centered flex flex-col items-center justify-center w-full h-full mt-2 !p-0'>
        <Accordion pokemonListState={pokemonListState}/>
    </section>
  )
}
