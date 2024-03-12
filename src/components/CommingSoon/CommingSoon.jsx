import React from 'react'

import commingSoon from '../../assets/CommingSoon/CommingSoon.gif'
import './CommingSoon.css'




const CommingSoon = () => {
  return (
    <div className='comming__soon__container font-radio-canada'>
        <p>Comming soon</p>
        <img className='img' src={commingSoon}/>
    </div>
  )
}

export default CommingSoon