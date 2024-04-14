import { useState } from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import LoadingProgress from '../../../../components/LoadingProgress/LoadingProgress';
import CSRFToken from '../../../../CSRFToken';

import styles from './Settings.module.css'





const Settings = () => {
    const user = useSelector(state => state.userStatus.user)
    
    const [showPasswordInputs, setShowPasswordInputs] = useState(false)
    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordInputs = () => {
        setShowPasswordInputs(!showPasswordInputs)
    }
    

    return (
        <div className='site__height'>
        <LoadingProgress />
            
            <div className={`${styles.settings__menu} font-madimi`}>

                <h1 className={styles.settings__title}>{user?.username_or_email} settings</h1>

                <div className={styles.option__container}>
                    <h1 className={`${styles.option__title} font-mono`}>Options</h1>
                </div>

                <div className={styles.option__container}>
                    <h1 className={`${styles.option__title} font-mono`}>Email settings</h1>
                </div>

                <div className={styles.background}>
                    <div className={styles.change__password__container}>

                        <h1 className={`${styles.dangerous__zone__text} font-madimi`}>DANGEROUS ZONE</h1>

                        <div className={styles.button__container}>

                            {!showPasswordInputs && (
                                <button className={styles.change__password__button}
                                    onClick={togglePasswordInputs}
                                >
                                    Change password
                                </button>
                            )}

                            {showPasswordInputs && (
                                <form className={styles.form__change__password}><CSRFToken />

                                    <div className={styles.form__group}>
                                        <label htmlFor='old-password'>Old password</label>
                                        <div className={styles.password__wrapper}>
                                            <input className={styles.password__inputs} type={oldPasswordVisible ? 'text' : 'password'} 
                                                placeholder='Old password' id='old-password' required
                                            />
                                            <div className={styles.password__toggle}  role='button' tabIndex='0'
                                                onClick={() => setOldPasswordVisible(!oldPasswordVisible)}
                                            >
                                                <FontAwesomeIcon className={styles.icon__style} icon={oldPasswordVisible ? faEyeSlash : faEye} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.form__group}>
                                        <label htmlFor='new-password'>New password</label>
                                        <div className={styles.password__wrapper}>
                                            <input className={styles.password__inputs} type={newPasswordVisible ? 'text' : 'password'} 
                                                placeholder='New password' id='new-password' required
                                            />
                                            <div className={styles.password__toggle}  role='button' tabIndex='0'
                                                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                                            >
                                                <FontAwesomeIcon className={styles.icon__style} icon={newPasswordVisible ? faEyeSlash : faEye} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.form__group}>
                                        <label htmlFor='confirm-password'>Confirm password</label>
                                        <div className={styles.password__wrapper}>
                                            <input className={styles.password__inputs} type={confirmPasswordVisible ? 'text' : 'password'} 
                                                placeholder='Confirm password' id='confirm-password' required
                                            />
                                            <div className={styles.password__toggle}  role='button' tabIndex='0'
                                                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                            >
                                                <FontAwesomeIcon className={styles.icon__style} icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.button__password__container}>
                                        <button type='button' className={styles.abort__button}
                                            onClick={() => setShowPasswordInputs(false)}
                                        >
                                            Abort
                                        </button>
                                        <button type='submit' className={styles.save__button}>
                                            Save
                                        </button>
                                    </div>

                                </form>
                            )}

                        </div>
                    
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Settings