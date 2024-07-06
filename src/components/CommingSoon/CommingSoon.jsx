import React from 'react'

import commingSoon from '../../assets/CommingSoon/CommingSoon.jpg'
import style from './CommingSoon.module.css'




const CommingSoon = () => {
  return (
    <div className={`${style.comming__soon__container} font-radio-canada`}>
        <img className='img' src={commingSoon}/>
    </div>
  )
}

export default CommingSoon