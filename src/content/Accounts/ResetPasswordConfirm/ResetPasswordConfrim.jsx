import { useState, useEffect } from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { resetPasswordConfirm } from '../../../slice/Accounts/ChangePassword/ResetPasswordConfirm/ResetPasswordConfirm'
import CSRFToken from '../../../CSRFToken'
import LoadingProgress from '../../../components/LoadingProgress/LoadingProgress'

import styles from './ResetPasswordConfrim.module.css'



const ResetPasswordConfrim = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useParams()

    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)
    
    const { status, error } = useSelector(state => state.resetPasswordConfirm)

    useEffect(() => {
        if (status === 'succeeded') {
            navigate('/login')
        }
    }, [status, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPasswordConfirm({
            token,
            new_password: newPassword, 
            confirm_new_password: confirmNewPassword
        }))
    }

    return (
        <div className={`${styles.confirm__container} site__height`}>
            <LoadingProgress isLoading={status === 'loading'}/>

            <form className={styles.confirm__form} onSubmit={handleSubmit}><CSRFToken />
                <h2 className={styles.confirm__title}>Confirm new password</h2>

                <div className={styles.form__group}>
                    <label htmlFor='password'>New password</label>
                    <div className={styles.password__wrapper}>
                        <input type={passwordVisible ? 'text' : 'password'}
                            value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                            placeholder='New password' required autoFocus
                        />
                        <div className={styles.password__toggle}
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            role='button' tabIndex='0'>
                            <FontAwesomeIcon className={styles.icon__style}
                                icon={passwordVisible ? faEyeSlash : faEye}
                            />
                        </div>
                    </div>
                    {status === 'failed' && error.new_password && (
                        <p className={styles.error__message}>{error.new_password[0]}</p>
                    )}
                </div>

                <div className={styles.form__group}>
                    <label htmlFor='confirm-password'>Confirm new password</label>
                    <div className={styles.password__wrapper}>
                        <input type={passwordConfirmVisible ? 'text' : 'password'}
                            value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}
                            placeholder='Confirm new password' required
                        />
                        <div className={styles.password__toggle}
                            onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}
                            role='button' tabIndex='0'>
                            <FontAwesomeIcon className={styles.icon__style}
                                icon={passwordConfirmVisible ? faEyeSlash : faEye}
                            />
                        </div>
                    </div>
                    {status === 'failed' && error.confirm_new_password && (
                        <p className={styles.error__message}>{error.confirm_new_password[0]}</p>
                    )}
                    
                </div>

                {status === 'failed' && error.error && (
                        <p className={styles.error}>{error.error}</p>
                )}

                <button type='submit' className={styles.confirm__form__button}>Reset password</button>

            </form>

        </div>
    )
}

export default ResetPasswordConfrim