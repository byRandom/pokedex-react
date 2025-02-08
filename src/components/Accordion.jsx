import React, { useState, useMemo, useLayoutEffect } from 'react'
import * as PokedexWrapper from 'pokeapi-js-wrapper'
import { AccordionItem } from './AccordionItem'
import InfiniteScroll from "react-infinite-scroll-component";
export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [pokemonListState, setPokemonList] = useState([])
  
  
  const getPokemons = async () => {
    if(pokemonListState.length === 0) {
      const p = new PokedexWrapper.Pokedex()
      p.getPokemonsList({limit:10}).then((response) => {
        let pokemon = response.results
        pokemon.forEach((element) => {
          element.Id = element.url.split('/')[6]
        }
        )
        setPokemonList(pokemon)
      })
    }else{
      const p = new PokedexWrapper.Pokedex()
      p.getPokemonsList({limit:25, offset:pokemonListState.length}).then((response) => {
        let pokemon = response.results
        pokemon.forEach((element) => {
          element.Id = element.url.split('/')[6]
        }
        )
        setPokemonList([...pokemonListState, ...pokemon])
      })
    }
  }

  const pokeData = useMemo(async () => getPokemons, [pokemonListState])

  useLayoutEffect(() => {
    getPokemons()
  }, [])

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <InfiniteScroll
          dataLength={pokemonListState.length}
          next={getPokemons}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
    <div id="accordion-collapse" data-accordion="collapse" className=' ml-4 w-80 mt-2 mr-1 md:flex md:flex-col md:m-auto md:w-md lg:w-lg xl:w-xl 2xl:w-2xl'>
      
          {pokemonListState.map((pokemon, index) => (
        <AccordionItem
          key={pokemon.url}
          pokemon={pokemon}
          index={index}
          isActive={activeIndex === index}
          onToggle={toggleAccordion}
        />
      ))}
        
      
    </div>
    </InfiniteScroll>
  )
}