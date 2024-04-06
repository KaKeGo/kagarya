import { configureStore } from '@reduxjs/toolkit'

// User imports
import registerReducer from './slice/Accounts/Register/register'
import loginReducer from './slice/Accounts/Login/Login'
import logoutReducer from './slice/Accounts/Logout/Logout'


const store = configureStore({
    reducer: {
        // User reducers
        register: registerReducer,
        login: loginReducer,
        logout: logoutReducer,
    }
})

export default store
