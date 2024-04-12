import { useState } from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
        <div className='site__height b'>
            
            <div className={`${styles.settings__menu}`}>

                <h1>{user?.username_or_email} Settings</h1>

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
                                <>
                                    <div className={styles.password__inputs}>
                                        <input className={styles.password__inputs} type={oldPasswordVisible ? 'text' : 'password'} placeholder='Old password'/>
                                        <div className={styles.password__toggle} onClick={() => setOldPasswordVisible(!oldPasswordVisible)}>
                                            <FontAwesomeIcon className={styles.icon__style} icon={oldPasswordVisible ? faEyeSlash : faEye} />
                                        </div>
                                    </div>
                                    <div className={styles.password__inputs} type={newPasswordVisible ? 'text' : 'password'}>
                                        <input className={styles.password__inputs} type={newPasswordVisible ? 'text' : 'password'} placeholder='New password'/>
                                        <div className={styles.password__toggle} onClick={() => setNewPasswordVisible(!newPasswordVisible)}>
                                            <FontAwesomeIcon className={styles.icon__style} icon={newPasswordVisible ? faEyeSlash : faEye} />
                                        </div>
                                    </div>
                                    <div className={styles.password__inputs} type={confirmPasswordVisible ? 'text' : 'password'}>
                                        <input className={styles.password__inputs} type={confirmPasswordVisible ? 'text' : 'password'} placeholder='Confirm new password'/>
                                        <div className={styles.password__toggle} onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                                            <FontAwesomeIcon className={styles.icon__style} icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                    
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Settings