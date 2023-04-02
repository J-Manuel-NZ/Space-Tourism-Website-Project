import React from 'react'
import { useState } from 'react'
import CloseIcon from '../assets/shared/icon-close.svg'
import MenuHamburger from '../assets/shared/icon-hamburger.svg'

const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <nav className='flex items-center w-screen my:6 lg:my-24 justify-between absolute'>
    <img className='mx-6 lg:mx-24' src="../src/assets/shared/logo.svg" alt="Space Company Logo" />
    <div className=' h-0.5 w-1/3 bg-gray-500 -mr-12 z-10 hidden lg:block'></div>
    {/* Navbar for tablet and desktop */}
    <div className=' h-24 hidden md:block md:px-6 lg:px-12 bg-white/5 backdrop-blur-md w-3/5'>
        <ul className='flex justify-evenly h-full items-center '>
            <li className=' nav-item nav-item-active '><span className='font-bold ' >00</span>  HOME</li>
            <li className=' nav-item '><span className='font-bold ' >01</span>  DESTINATION</li>
            <li className=' nav-item '><span className='font-bold ' >02</span>  CREW</li>
            <li className=' nav-item '><span className='font-bold ' >03</span>  TECHNOLOGY</li>
        </ul>
    </div>
    {/* Menu for Mobile */}
    <div className=' h-24 md:hidden relative'>
        {isMenuOpen 
        ? <img className="cursor-pointer my-9 absolute z-20 right-6" src={CloseIcon} alt='Close Icon' onClick={() => setIsMenuOpen(false)} /> 
        : <img className="cursor-pointer my-9 mx-6" src={MenuHamburger} alt='Menu Icon' onClick={() => setIsMenuOpen(true)}/>}
        {isMenuOpen && (
        <ul className='flex flex-col h-screen w-[75vw] backdrop-blur-3xl pr-0 pt-24 z-10'>
            <li className=' nav-menu-item nav-menu-item-active '><span className='font-bold ' >00</span>  HOME</li>
            <li className=' nav-menu-item '><span className='font-bold ' >01</span>  DESTINATION</li>
            <li className=' nav-menu-item '><span className='font-bold ' >02</span>  CREW</li>
            <li className=' nav-menu-item '><span className='font-bold ' >03</span>  TECHNOLOGY</li>
        </ul>
        )}
    </div>
  </nav>
  )
}

export default Navbar