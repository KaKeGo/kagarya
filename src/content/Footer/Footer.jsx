import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='section__1'>
            <p>KaGaRya</p>
            <p>Email: future</p>
            <p>Created by: KaKeGo</p>
        </div>
        <div className='section__2'>
            <a className='footer__icon' href='#'><FontAwesomeIcon icon={faFacebook} size='lg'/></a>
            <a className='footer__icon' href='#'><FontAwesomeIcon icon={faTiktok} size='lg'/></a>
            <a className='footer__icon' href='#'><FontAwesomeIcon icon={faInstagram} size='lg'/></a>
        </div>

    </div>
  )
}

export default Footer