import React from 'react'

export const PokeStats = ({pokemonItem}) => {
  return (
    <div>
        <h2>Estadisticas:</h2>
    
        <ul className='nes-list is-disc text-xs md:text-lg'>
        {pokemonItem.stats !== undefined ? (
            pokemonItem.stats.map((stat) => (
            <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
            ))
        ) : (
            <li>Cargando...</li>
        )}
    </ul>
    </div>
  )
}
