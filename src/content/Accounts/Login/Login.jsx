import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import CSRFToken from '../../../CSRFToken'
import LoadingProgress from '../../../components/LoadingProgress/LoadingProgress';

import styles from './Login.module.css'



const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={`${styles.login__container} site__height`}>

      <form className={styles.login__form} onSubmit={handleSubmit}><CSRFToken />
        <h2 className={styles.login__title}>Login</h2>

        <div className={styles.form__group}>
          <label htmlFor='login-email'>Email</label>
          <input type='email' id='login-email' placeholder='mail@mail.com' required
            value={email} onChange={(e) => setEmail(e.target.value)} autoFocus
          />
        </div>

        <div className={styles.form__group}>
          <label htmlFor='login-password'>Password</label>
          <div className={styles.password__wrapper}>
            <input type={passwordVisible ? 'text' : 'password'} id='login-password' placeholder='Password' required
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.password__toggle}
              onClick={() => setPasswordVisible(!passwordVisible)}
              role='button' tabIndex='0'>
                <FontAwesomeIcon className={styles.icon__style} icon={passwordVisible ? faEyeSlash : faEye}/>
            </div>
          </div>
        </div>

        <button type='submit'>Login</button>

      </form>

    </div>
  )
}

export default Login