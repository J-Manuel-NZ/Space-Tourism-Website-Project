import React from 'react'
import { useState } from 'react'
import CloseIcon from '/assets/shared/icon-close.svg'
import MenuHamburger from '/assets/shared/icon-hamburger.svg'

const Navbar = ( {page} ) => {


const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <nav className='flex items-center w-screen my:6 lg:my-24 justify-between absolute'>
    <img className='mx-6 lg:mx-24' src="../public/assets/shared/logo.svg" alt="Space Company Logo" />
    <div className=' h-0.5 w-1/3 bg-gray-500 -mr-12 z-10 hidden lg:block'></div>
    {/* Navbar for tablet and desktop */}
    <div className=' h-24 hidden md:block md:px-6 lg:px-12 bg-white/5 backdrop-blur-md w-3/5'>
        <ul className='flex justify-evenly h-full items-center '>
          {page === 'home' ? <li className=' nav-item nav-item-active '><a href='/'><span className='font-bold ' >00</span>  HOME</a></li> : <li className=' nav-item '><a href='/'><span className='font-bold ' >00</span>  HOME</a></li>}
          {page === 'destination' ? <li className=' nav-item nav-item-active '><a href="/destination"><span className='font-bold ' >01</span>  DESTINATION</a></li> : <li className=' nav-item '><a href='/destination'><span className='font-bold ' >01</span>  DESTINATION</a></li>}
          {page === 'crew' ? <li className=' nav-item nav-item-active '><a href="/crew"><span className='font-bold ' >02</span>  CREW</a></li> : <li className=' nav-item '><a href='/crew'><span className='font-bold ' >02</span>  CREW</a></li>}
          {page === 'technology' ? <li className=' nav-item nav-item-active '><a href="/technology"><span className='font-bold ' >03</span>  TECHNOLOGY</a></li> : <li className=' nav-item '><a href='/technology'><span className='font-bold ' >03</span>  TECHNOLOGY</a></li>}
            {/* <li className=' nav-item '><span className='font-bold ' >00</span>  HOME</li>
            <li className=' nav-item '><span className='font-bold ' >01</span>  DESTINATION</li>
            <li className=' nav-item '><span className='font-bold ' >02</span>  CREW</li>
            <li className=' nav-item '><span className='font-bold ' >03</span>  TECHNOLOGY</li> */}
        </ul>
    </div>
    {/* Menu for Mobile */}
    <div className=' h-24 md:hidden relative'>
        {isMenuOpen 
        ? <img className="cursor-pointer my-9 absolute z-20 right-6" src={CloseIcon} alt='Close Icon' onClick={() => setIsMenuOpen(false)} /> 
        : <img className="cursor-pointer my-9 mx-6" src={MenuHamburger} alt='Menu Icon' onClick={() => setIsMenuOpen(true)}/>}
        {isMenuOpen && (
        <ul className='flex flex-col h-screen w-[75vw] backdrop-blur-3xl pr-0 pt-24 z-10'>
          {page === 'home' ? <li className=' nav-menu-item nav-menu-item-active '><span className='font-bold ' >00</span>  HOME</li> : <li className=' nav-menu-item '><span className='font-bold ' >00</span>  HOME</li>}
          {page === 'destination' ? <li className=' nav-menu-item nav-menu-item-active '><span className='font-bold ' >01</span>  DESTINATION</li> : <li className=' nav-menu-item '><span className='font-bold ' >01</span>  DESTINATION</li>}
          {page === 'crew' ? <li className=' nav-menu-item nav-menu-item-active '><span className='font-bold ' >02</span>  CREW</li> : <li className=' nav-menu-item '><span className='font-bold ' >02</span>  CREW</li>}
          {page === 'technology' ? <li className=' nav-menu-item nav-menu-item-active '><span className='font-bold ' >03</span>  TECHNOLOGY</li> : <li className=' nav-menu-item '><span className='font-bold ' >03</span>  TECHNOLOGY</li>}
            {/* <li className=' nav-menu-item nav-menu-item-active '><span className='font-bold ' >00</span>  HOME</li>
            <li className=' nav-menu-item '><span className='font-bold ' >01</span>  DESTINATION</li>
            <li className=' nav-menu-item '><span className='font-bold ' >02</span>  CREW</li>
            <li className=' nav-menu-item '><span className='font-bold ' >03</span>  TECHNOLOGY</li> */}
        </ul>
        )}
    </div>
  </nav>
  )
}

export default Navbar;