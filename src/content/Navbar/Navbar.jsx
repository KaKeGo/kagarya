import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import DropdownNavMenu from '../../components/DropdownNavMenu/DropdownNavMenu'

import logo from '../../assets/logo/site_logo/kagarya-logo.png'
import styles from './Navbar.module.css'



const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => 
    `${isActive ? 'active__link' : ''}`;

  const isAuthenticated = useSelector(state => state.userStatus.isAuthenticated);
  const user = useSelector(state => state.userStatus.user)
  
  return (
    <div className={`${styles.navbar} ${styles.text}`}>

      <div className={`${styles.navbar__section} ${styles.logo}`}>
        <NavLink to='/'>
          <img src={logo} alt='KaGaRya logo' className={styles.navbar__logo}/>
        </NavLink>
      </div>

      <div className={`${styles.navbar__section} ${styles.links} font-madimi text-lg`}>
        <NavLink to='/' end className={getNavLinkClass}>Home</NavLink>
        {!isAuthenticated && (
          <>
            <NavLink to='/register' className={getNavLinkClass}>Register</NavLink>
            <NavLink to='/login' className={getNavLinkClass}>Login</NavLink>
          </>
        )}
        <NavLink to='/about' className={getNavLinkClass}>About</NavLink>
      </div>

      <div className={`${styles.navbar__section} ${styles.user}`}>
        {isAuthenticated && (
          <>
          <p className='mr-5'>{user?.username_or_email}</p>
          <div className={styles.navbar__userprofile}>
            <DropdownNavMenu />
          </div>
          </>
        )}
      </div>

    </div>
  )
}

export default Navbar