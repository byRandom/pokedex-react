import React from 'react'
import { TypeAnimation } from 'react-type-animation';

let sequence = [];
let regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola','Teselia', 'Galar', 'Paldea'];
regions.forEach((region, index) => {
  sequence.push(`Bienvenido a la Pokédex, aquí podrás encontrar información sobre tus pokemons favoritos de la región de ${region}.`);
  sequence.push(1000);
});

export const Home = () => {
  return (
    <section className='nes-container with-title is-centered  flex flex-col items-center justify-center md:m-auto md:w-[50%] h-fit p-0'>
      <p className="title">  </p>
      <TypeAnimation sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className='md:text-lg md:!w-[70%] md:m-auto'
    />

    <p className='nes-text nes-container is-rounded is-dark is-primary m-2 p-4 w-full md:!m-auto md:w-[60%] lg:w-[70%] xl:w-[80%]'>
    Para empezar, pulsa en el boton superior, donde dice Pokédex.
    Si quieres saber mas sobre esta aplicación y con que fue desarrollada, visita el repositorio en GitHub.
    </p>
    <ul className='flex flex-row flex-wrap gap-2 w-full -m-2 md:w-[85%] md:m-auto lg:pl-[-10px] xl:pl-[0%] 2xl:pl-25'>
      <li>
        <a href="https://github.com/byRandom/pokedex-react" className="nes-badge">
          <span className="is-dark">Github<i className="nes-icon github is-small"></i></span>
        </a>
      </li>
      <li>
      <li>
        <a href="https://tomasperez.vercel.app" className="nes-badge">
          <span className="is-primary">Tomás<i className="nes-icon star is-small"></i></span>
        </a>
      </li>
      </li>
    </ul>
    </section>
  )
}
