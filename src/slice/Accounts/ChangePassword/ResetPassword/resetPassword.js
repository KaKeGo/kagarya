import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

import { DEV_URL } from '../../../../Api_url'


export const resetPassword = createAsyncThunk(
    'user/resetPassword',
    async (userData, { rejectWithValue }) => {
        const csrftoken = Cookies.get('kakusie')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            withCredentials: true
        }

        try {
            const response = await axios.post(
                `${DEV_URL}accounts/reset-password/`,
                userData,
                config,
            )
            console.log(response.data)
            return response.data
        } catch (err) {
            console.log("Redux error:", err.response)
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    status: 'idle',
    error: null,
}

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetPassword.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.message = action.payload.message
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default resetPasswordSlice.reducer
