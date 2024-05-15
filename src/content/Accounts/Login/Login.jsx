import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { loginUser, resetLoginState } from '../../../slice/Accounts/Login/Login';
import useLoaclStorage from '../../../components/LocalStorage/LocalStorage';
import CSRFToken from '../../../CSRFToken'
import LoadingProgress from '../../../components/LoadingProgress/LoadingProgress';

import styles from './Login.module.css'



const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useLoaclStorage('loginEmail', '')
  const [password, setPassword] = useLoaclStorage('loginPassword', '')
  const [formErrors, setFormErrors] = useState({})

  const [passwordVisible, setPasswordVisible] = useState(false)

  const { status, error } = useSelector((state) => state.login)

  useEffect(() => {
    if (error && typeof error === 'object') {
      setFormErrors(error)
    }
  }, error)

  useEffect(() => {
    dispatch(resetLoginState())
  }, [dispatch])

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/')
    }
  }, [status, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser({
      email, password
    }))
  }

  return (
    <div className={`${styles.login__container} site__height`}>
      <LoadingProgress isLoading={status === 'loading'} />

      <form className={styles.login__form} onSubmit={handleSubmit}><CSRFToken />
        <h2 className={styles.login__title}>Login</h2>

        <div className={styles.form__group}>
          <label htmlFor='login-email'>Email</label>
          <input type='email' id='login-email' placeholder='mail@mail.com' required
            value={email} onChange={(e) => setEmail(e.target.value)} autoFocus
          />
          {formErrors.email && <p className={styles.error}>{formErrors.email[0]}</p>}
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
          {formErrors.password && <p className={styles.error}>{formErrors.password[0]}</p>}
        </div>

        <button type='submit'>Login</button>

        <div className={styles.resetPasswordLink}>
          <Link to='/reset-password'>
            Can't log in?
          </Link>
        </div>

      </form>

    </div>
  )
}

export default Login