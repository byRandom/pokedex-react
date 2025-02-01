import React, { useEffect } from 'react'

export const PokeAbilities = ({pokemonItem}) => {
  return (
    <div>
        <h2>Habilidades:</h2>
        <ul className='nes-list is-disc text-xs md:text-lg'>
            {pokemonItem.abilities !== undefined ? (
                pokemonItem.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
                ))
            ) : (
                <li>Cargando...</li>
            )}
        </ul>
    </div>
  )
}
