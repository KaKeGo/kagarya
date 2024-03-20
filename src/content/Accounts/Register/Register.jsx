import React from 'react'
import CommingSoon from '../../../components/CommingSoon/CommingSoon'

import CSRFToken from '../../../CSRFToken'

import './Register.css'



const Register = () => {
  return (
    <div className='site__height register__container'>
      
      <form className='register__form'><CSRFToken />

        <div className='form__group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='mail@mail.com' autoFocus required/>
        </div>

        <div className='form__group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Password' required/>
        </div>

        <div className='form__group'>
          <label htmlFor='confirm-password'>Confirm password</label>
          <input type='password' id='confirm-password' placeholder='Confirm password' required/>
        </div>

        <div className='form__checkbox terms'>
          <input type='checkbox' id='termsCheckbox' required/>
          <label>Akcept terms u can find them <a href='#' htmlFor='termsCheckbox'> here</a>.</label>
          
        </div>

        <button type='submit'>Create account</button>

      </form>

    </div>
  )
}

export default Register