import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { resetPassword } from '../../../slice/Accounts/ChangePassword/ResetPassword/resetPassword'

import styles from './ResetPassword.module.css'
import LoadingProgress from '../../../components/LoadingProgress/LoadingProgress'
import CSRFToken from '../../../CSRFToken'


const ResetPassword = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')

    const { status, error, message } = useSelector(state => state.resetPassword)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPassword({ email }))
    }

    return (
        <div className={`${styles.reset__password__container} site__height`}>
            <LoadingProgress isLoading={status === 'loading'}/>
            

            <form className={styles.reset__password__form} onSubmit={handleSubmit}><CSRFToken />
                <h1 className={styles.reset__password__title}>Password Reset</h1>

                {status === 'succeeded' ? (
                    <p className={styles.success__message}>
                        {message}
                    </p>
                ) : (
                <>
                    <div className={styles.form__group}>
                        <label htmlFor='email'>Email:</label>
                        <input placeholder='mail@example.com' autoFocus
                            type='email' id='email' value={email} required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {status === 'failed' && error.email && (
                            <p className={styles.error__message}>{error.email[0]}</p>
                        )}
                    </div>
                    <button className={styles.reset__password__button}>Reset password</button>
                </>
                )}
                

                {status === 'idle' && (
                    <p className={styles.info__text}>
                        Enter your email address and we will send you a link to reset your password.
                    </p>
                )}

            </form>

            

        </div>
    )
}

export default ResetPassword