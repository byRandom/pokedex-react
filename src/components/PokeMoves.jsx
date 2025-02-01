import React from 'react'

export const PokeMoves = ({pokemonItem}) => {
  return (
    <div>
        <h2>Movimientos:</h2>
        <ul className='nes-list is-disc text-xs md:text-lg'>
           {pokemonItem.moves !== undefined ? (
                pokemonItem.moves.map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
                ))
            ) : (
                <li>Cargando...</li>
            )}
        </ul>
    </div>
  )
}
