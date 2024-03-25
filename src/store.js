import { configureStore } from '@reduxjs/toolkit'

import registerReducer from './slice/Accounts/Register/register'


const store = configureStore({
    reducer: {
        accountCreate: registerReducer,
    }
})

export default store
