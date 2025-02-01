import React, { useEffect, useMemo, useState } from 'react'
import { PokeCard } from './PokeCard'
import * as PokedexWrapper from 'pokeapi-js-wrapper'

export const AccordionItem = ({ pokemon, index, isActive, onToggle }) => {
  const [pokemonId, setPokemonId] = useState(1)
  const [pokemonItem, setPokemonItem] = useState({})
  const [pokemonImage, setPokemonImage] = useState({})
  const p = useMemo(() => new PokedexWrapper.Pokedex(), [])

  // Extract ID only once when component mounts
  useEffect(() => {
    const regex = /\/\d+\//gm
    const id = parseInt(pokemon.url.match(regex)[0].replace(/\//g, ''))
    setPokemonId(id)
  }, [pokemon.url]) // Only depends on URL

  // Fetch Pokemon data only when accordion is opened
  useEffect(() => {
    if (isActive) {
      p.getPokemonByName(pokemonId).then((response) => {
        setPokemonItem(response)
      })
    }
  }, [isActive, pokemonId, p]) // Only re-fetch when these change

  return (
    <>
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center flex-row flex-nowrap nes-btn justify-between w-full font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3"
          onClick={() => onToggle(index)}
          aria-expanded={isActive}
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span>{pokemon.name}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${isActive ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`${isActive ? '' : 'hidden'} nes-container `}
        aria-labelledby={`accordion-collapse-heading-${index} `}
      >
        <div className=" is-centered md:m-auto self-center">
          <PokeCard pokemonItem={pokemonItem} pokemonImage={pokemonImage} setPokemonImage={setPokemonImage}/>
        </div>
      </div>
    </>
  )
}