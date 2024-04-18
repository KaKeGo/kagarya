import { configureStore } from '@reduxjs/toolkit'

// User status
import userStatusReducer from './slice/Accounts/Userstatus/userStatus'
// User imports
import registerReducer from './slice/Accounts/Register/register'
import loginReducer from './slice/Accounts/Login/Login'
import logoutReducer from './slice/Accounts/Logout/Logout'
import changePasswordReducer from './slice/Accounts/ChangePassword/ChangePassword/changePassword'


const store = configureStore({
    reducer: {
        // User status
        userStatus: userStatusReducer,
        // User reducers
        register: registerReducer,
        login: loginReducer,
        logout: logoutReducer,
        changePassword: changePasswordReducer,
    }
})

export default store
