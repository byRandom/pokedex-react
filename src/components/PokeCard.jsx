import React from 'react'
import { PokeAbilities } from './PokeAbilities'
import { PokeStats } from './PokeStats'
import { PokeMoves } from './PokeMoves'
import { PokeCaroussel } from './PokeCaroussel'

export const PokeCard = ({pokemonItem, pokemonImage, setPokemonImage}) => {
  return (
    <div className='nes-container is-rounded flex flex-col items-center justify-center w-fit h-fit p-0 md:w-full'>
        
        
          <PokeCaroussel pokemonImage={pokemonImage} pokemonItem={pokemonItem} setPokemonImage={setPokemonImage} />
          {/* <img src={pokemonImage} alt={pokemonItem.name} className='w-full' /> */}
        
        
        
        <PokeStats pokemonItem={pokemonItem} />
        <PokeAbilities pokemonItem={pokemonItem} />
        {/* <PokeMoves pokemonItem={pokemonItem}/> */}
        
           

    </div>
  )
}
