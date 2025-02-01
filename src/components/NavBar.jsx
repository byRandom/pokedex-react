import React from 'react'
import { Link } from 'react-router'
export const NavBar = () => {
  return (
    
<>
<nav className="bg-white border-gray-200  shadow-md no-underline sticky z-10 top-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-black">
        <i className='nes-pokeball scale-50 -m-4'></i>
    </a>
    <div className=" md:block md:w-auto pb-8" id="navbar-default">
      <ul className="font-medium flex flex-col m-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white h-1 ">
        <li className='text-black'>
          <Link to='/pokedex'>
            <button type='button' className='nes-btn is-primary w-32 h-10 text-xs'>Pokédex</button> 
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
