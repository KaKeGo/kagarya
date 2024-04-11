import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import DropdownNavMenu from '../../components/DropdownNavMenu/DropdownNavMenu'

import logo from '../../assets/logo/site_logo/kagarya-logo.png'
import styles from './Navbar.module.css'



const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => 
    isActive ? styles.active__link : '';

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
        <NavLink to='/' end 
          className={({ isActive }) => `${styles.navbar__links} ${getNavLinkClass({ isActive })}`}>
          Home
        </NavLink>
        {!isAuthenticated && (
          <>
            <NavLink to='/register' 
              className={({ isActive }) => `${styles.navbar__links} ${getNavLinkClass({ isActive })}`}>
              Register
            </NavLink>
            <NavLink to='/login' 
              className={({ isActive }) => `${styles.navbar__links} ${getNavLinkClass({ isActive })}`}>
              Login
            </NavLink>
          </>
        )}
        <NavLink to='/about' 
          className={({ isActive }) => `${styles.navbar__links} ${getNavLinkClass({ isActive })}`}>
          About
        </NavLink>
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