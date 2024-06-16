import React , { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCaretLeft, faCaretRight, faCirclePlus, faBarsProgress 
} from '@fortawesome/free-solid-svg-icons'

import style from './RightMenu.module.css'



const RightMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${style.right__menu} ${isOpen ? style.open : ''}`}>

            <div className={style.right__icon} onClick={() => setIsOpen(!isOpen)}>

                <span></span>
                    <FontAwesomeIcon className={style.right__awsome} icon={isOpen ? faCaretRight : faCaretLeft} />
                <span></span>

            </div>

            <div className={style.right__menu__content}>

                <a href='#'><FontAwesomeIcon icon={faCirclePlus} /></a>
                <a href='#'><FontAwesomeIcon icon={faBarsProgress} /></a>

            </div>

        </div>
    )
}

export default RightMenu
