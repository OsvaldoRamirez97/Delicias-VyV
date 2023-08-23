import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav className='px-20 py-5'>
        <NavLink to={"/"} className='px-auto'>
        <img src='https://i.postimg.cc/BbwrCb5H/logo.png' alt='Logo' className='h-24 w-2h-24' />
        </NavLink>
            <ul className='grid grid-cols-8 text-center content-center'>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Galletitas" >Galletitas</NavLink>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Budines" >Budines</NavLink>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Pasta-Frolas" >Pasta Frolas</NavLink>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Tortas" >Tortas</NavLink>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Tartas" >Tartas</NavLink>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Por-Caja" >Por Caja</NavLink>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Por-Unidad" >Por Unidad</NavLink>
              <NavLink className='text-violet-400   border-violet-400 border-solid border-2 mx-2 rounded-2xl hover:bg-gray-400 hover:text-white hover:border-white' to="/category/Cart" >
              <CartWidget/>
              </NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar