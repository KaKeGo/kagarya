import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { DEV_URL } from "../../../../Api_url";



export const resetPasswordConfirm = createAsyncThunk(
    'user/resetPasswordConfirm',
    async (userData, { rejectWithValue }) => {
        const csrftoken = Cookies.get('kakusie')

        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            withCredentials: true
        }

        try {
            const response = await axios.post(
                `${DEV_URL}accounts/reset-password-confirm/${userData.token}/`,
                userData,
                config
            )
            console.log(response.data)
            return response.data
        } catch (err) {
            console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    status: 'idle',
    error: null,
}

const resetPasswordConfirmSlice = createSlice({
    name: 'resetPasswordConfirm',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetPasswordConfirm.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(resetPasswordConfirm.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.message = action.payload.message
            })
            .addCase(resetPasswordConfirm.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default resetPasswordConfirmSlice.reducer
