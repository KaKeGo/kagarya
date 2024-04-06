import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { registerUser, resetRegisterState } from '../../../slice/Accounts/Register/register'
import useLoaclStorage from '../../../components/LocalStorage/LocalStorage'
import CSRFToken from '../../../CSRFToken'
import LoadingProgress from '../../../components/LoadingProgress/LoadingProgress';

import styles from './Register.module.css'



const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useLoaclStorage('registerEmail', '');
  const [password, setPassword] = useLoaclStorage('registerPassword', '');
  const [passwordConfirm, setPasswordConfirm] = useLoaclStorage('registerPasswordConfirm', '');
  const [termsAccepted, setTermsAccepted] = useLoaclStorage('registerTermsAccepted', false);
  const [formErrors, setFormErrors] = useState({})

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)

  const { status, error } = useSelector((state) => state.register)

  useEffect(() => {
    if (error && typeof error === 'object') {
      setFormErrors(error)
    }
  }, error)

  useEffect(() => {
    dispatch(resetRegisterState())
  }, [dispatch])

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/login')
    }
  }, [status, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser({ 
      email, password, 
      password_confirm: passwordConfirm, 
      terms_accepted: termsAccepted 
    }))
  }

  return (
    <div className={`${styles.register__container} site__height`}>
      <div>
        <LoadingProgress isLoading={status === 'loading'}/>
      </div>
      
      <form className={styles.register__form} onSubmit={handleSubmit}><CSRFToken />

        <h2 className={styles.register__title}>Create Account</h2>

        <div className={styles.form__group}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='mail@mail.com' autoFocus required
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <p className={styles.error}>{formErrors.email[0]}</p>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor='password'>Password</label>
          <div className={styles.password__wrapper}>
            <input type={passwordVisible ? 'text' : 'password'} id='password' placeholder='Password' required
              value={password} onChange={(e) => setPassword(e.target.value)} maxLength={24}
            />
            <div className={styles.password__toggle}
              onClick={() => setPasswordVisible(!passwordVisible)}
              role="button" tabIndex="0"
              onKeyPress={(e) => { if (e.key === 'Enter') setPasswordVisible(!passwordVisible); }}
            >
              <FontAwesomeIcon className={styles.icon__style} icon={passwordVisible ? faEyeSlash : faEye} />
            </div>
          </div>
          {formErrors.password && <p className={styles.error}>{formErrors.password[0]}</p>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor='confirm-password'>Confirm password</label>
          <div className={styles.password__wrapper}>
            <input type={passwordConfirmVisible ? 'text' : 'password'} id='confirm-password' placeholder='Confirm password' required
              value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} maxLength={24}
            />
            <div className={styles.password__toggle}
              onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => { if (e.key === 'Enter') setPasswordConfirmVisible(!passwordConfirmVisible); }}
            >
              <FontAwesomeIcon className={styles.icon__style} icon={passwordConfirmVisible ? faEyeSlash : faEye} />
            </div>
          </div>
          {formErrors.password_confirm && <p className={styles.error}>{formErrors.password_confirm[0]}</p>}
        </div>

        <div className={[styles.form__checkbox, styles.terms].join(' ')}>
          <input type='checkbox' id='termsCheckbox' required
            checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor='termsCheckbox' className={styles.custom__checkbox}></label>
          <label>Akcept terms u can find them <a href='#' htmlFor='termsCheckbox'> here</a>.</label>
          
        </div>

        <button type='submit'>Create account</button>
        {error && typeof error === 'string' && <p className={styles.error}>{error}</p>}

      </form>

    </div>
  )
}

export default Register