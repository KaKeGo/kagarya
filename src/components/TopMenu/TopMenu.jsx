import React, { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCaretDown, faCaretUp, faListCheck
} from '@fortawesome/free-solid-svg-icons'

import style from './TopMenu.module.css'


const TopMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isAuthenticated = useSelector(state => state.userStatus.isAuthenticated)

    return (
        <div className={`${style.top__menu} ${isOpen ? style.open : ''}`}>

            <div className={style.top__icon} onClick={() => setIsOpen(!isOpen)}>

                <span></span>
                    <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown}/>
                <span></span>

            </div>

            <div className={style.top__menu__content}>
                {isAuthenticated ? (
                    <NavLink to='/taskboard'><FontAwesomeIcon icon={faListCheck}/></NavLink>
                ) : (
                    <>
                        <p>Login to see more</p>
                    </>
                )}

                

            </div>

        </div>
    )
}

export default TopMenu
