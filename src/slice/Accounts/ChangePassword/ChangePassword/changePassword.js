import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { DEV_URL } from "../../../../Api_url";



export const changePassword = createAsyncThunk(
    'user/changePassword',
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
                `${DEV_URL}accounts/changepassword/`,
                userData,
                config,
            )
            console.log(response.data)
            return response.data
        } catch (err) {
            console.log("Błąd z akcji Reduxa:", err.response.data);
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    user: {},
    status: 'idle',
    error: null,
}

const changePasswordSlice = createSlice({
    name: 'changePassword',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changePassword.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
                state.error = null
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default changePasswordSlice.reducer
