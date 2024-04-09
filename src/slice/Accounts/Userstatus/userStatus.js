import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { DEV_URL } from "../../../Api_url";
import { loginUser } from "../Login/Login";
import { logoutUser } from "../Logout/Logout";


export const userStatus = createAsyncThunk(
    'user/status',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${DEV_URL}accounts/userstatus/`,
                {withCredentials: true}
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    isAuthenticated: false,
    user: {},
    status: 'idle',
    error: null
}

const userStatusSlice = createSlice({
    name: 'userStatus',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userStatus.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(userStatus.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isAuthenticated = action.payload.is_authenticated
                state.user = action.payload
                state.error = null
            })
            .addCase(userStatus.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false
            })
    }
})

export default userStatusSlice.reducer
