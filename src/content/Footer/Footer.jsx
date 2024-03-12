import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

const Footer = () => {
    const getCurrentDate = () => {
        const today = new Date()
        return today.toLocaleDateString('pl-PL')
    }

    return (
        <div className='footer'>

            <div className='section__1'>
                <p>KaGaRya</p>
                <p>Email: future</p>
                <p>Created by: KaKeGo</p>
                <p>Site idea date: 20.06.2023 - {getCurrentDate()}</p>
            </div>
            <div className='section__2'>
                <a className='footer__icon' href='#'><FontAwesomeIcon icon={faFacebook} size='xl'/></a>
                <a className='footer__icon' href='#'><FontAwesomeIcon icon={faTiktok} size='xl'/></a>
                <a className='footer__icon' href='#'><FontAwesomeIcon icon={faInstagram} size='xl'/></a>
            </div>

        </div>
    )
}

export default Footer