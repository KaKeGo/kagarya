import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo/site_logo/kagarya-logo.png'
import './Navbar.css'



const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => 
    `${isActive ? 'active__link' : ''}`;


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('Username')
  
  return (
    <div className='navbar text'>

      <div className='navbar__section logo'>
        <NavLink to='/'>
          <img src={logo} alt='KaGaRya logo' className='navbar__logo' />
        </NavLink>
      </div>

      <div className='navbar__section links font-madimi text-lg'>
        <NavLink to='/' end className={getNavLinkClass}>Home</NavLink>
        <NavLink to='/register' className={getNavLinkClass}>Register</NavLink>
        <NavLink to='/login' className={getNavLinkClass}>Login</NavLink>
        <NavLink to='/about' className={getNavLinkClass}>About</NavLink>
      </div>

      <div className='navbar__section user'>
        {isLoggedIn && (
        <div className='navbar__userprofile'>
          {username}
        </div>
        )}
      </div>

    </div>
  )
}

export default Navbar