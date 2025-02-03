import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem'
export const Accordion = ({ pokemonListState }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
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
  )
}