import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { DEV_URL } from "../../../Api_url";



export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
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
                `${DEV_URL}accounts/logout/`,
                {},
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
    status: 'idle',
    error: null
}

const logoutSlice = createSlice({
    name: 'logout',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default logoutSlice.reducer
