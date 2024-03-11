import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'



const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => isActive ? 'active__link' : ''

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('Username')
  
  return (
    <div className='navbar'>

      <div className='navbar__section logo'>
        <div className='navbar__logo'>
          Logo
        </div>
      </div>

      <div className='navbar__section links'>
        <NavLink to='/' end className={getNavLinkClass}>Home</NavLink>
        <NavLink to='/register' className={getNavLinkClass}>Register</NavLink>
        <NavLink to='/login' className={getNavLinkClass}>Login</NavLink>
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