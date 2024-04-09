import React from 'react'

import commingSoon from '../../assets/CommingSoon/CommingSoon.avif'
import './CommingSoon.css'




const CommingSoon = () => {
  return (
    <div className='comming__soon__container font-radio-canada b'>
        <img className='img' src={commingSoon}/>
    </div>
  )
}

export default CommingSoon