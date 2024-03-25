import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie'

import { DEV_URL } from '../../../Api_url'



export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        const csrftoken = Cookies.get('kakusie')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            withCredentials: true
        }

        try {
            const response = await axios.post(
                `${DEV_URL}accounts/create/`,
                userData, 
                config
                )
                console.log('Response data:', response.data)
                return response.data
        } catch (err) {
            console.log('Error data:', err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    user: {},
    status: 'idle',
    error: null,
}

const registerSlice = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {
        resetRegisterState: (state) => {
            state.status = 'idle'
            state.user = {}
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { resetRegisterState } = registerSlice.actions

export default registerSlice.reducer
