import { configureStore } from '@reduxjs/toolkit'

import { registerUser } from './slice/Accounts/Register/register'


const store = configureStore({
    reducer: {
        accountCreate: registerUser,
    }
})

export default store
