import { configureStore } from '@reduxjs/toolkit'

// User imports
import registerReducer from './slice/Accounts/Register/register'
import loginReducer from './slice/Accounts/Login/Login'


const store = configureStore({
    reducer: {
        // User reducers
        register: registerReducer,
        login: loginReducer
    }
})

export default store
