import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { DEV_URL } from '../../../Api_url'



export const loginUser = createAsyncThunk(
    'user/login',
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
                `${DEV_URL}accounts/login/`,
                userData,
                config,
            )
            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    user: {},
    status: 'idle',
    error: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        resetLoginState: (state) => {
            state.status = 'idle'
            state.user = {}
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { resetLoginState } = loginSlice.actions

export default loginSlice.reducer
