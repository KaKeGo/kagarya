import { useState } from "react"
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import LogoutButton from "../../content/Accounts/Logout/Logout"

import styles from './DropdownNavMenu.module.css'



const DropdownNavMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHiding, setIsHiding] = useState(false)

    const toggleMenu = () => {
        if (isOpen) {
            setIsHiding(true)
            setTimeout(() => {
                setIsHiding(false)
                setIsOpen(false)
            }, 500)
        } else {
            setIsOpen(true)
        }
    }


    return (
        <div className={styles.dropdown}>

            <button className={styles.dropdown__toggle} onClick={toggleMenu}>
                Menu
            </button>

            {isOpen && (
                <div className={styles.dropdown__background}>
                    <div className={`
                        ${styles.dropdown__content} 
                        ${isOpen ? styles.show : ''} ${isHiding ? styles.hide : ''}`}
                    >
                        <NavLink className={styles.dropdown__item}>
                            <FontAwesomeIcon icon={faUser} /> Profile
                        </NavLink>
                        <NavLink className={styles.dropdown__item}>
                            <FontAwesomeIcon icon={faGear} /> Settings
                        </NavLink>
                        <div className={styles.dropdown__item}>
                            <FontAwesomeIcon icon={faRightFromBracket} /> <LogoutButton />
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default DropdownNavMenu