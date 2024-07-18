import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { DEV_URL } from "../../../Api_url";


export const taskBoardDetai = createAsyncThunk(
    'taskBoardDetail/taskBoardDetail',
    async (slug, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${DEV_URL}taskboard/${slug}/`,
                { withCredentials: true }
            )
            console.log(response.data)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    taskBoardDetai: {},
    status: 'idle',
    error: null,
}


const taskBoardDetailSlice = createSlice({
    name: 'taskBoardDetail',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(taskBoardDetai.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(taskBoardDetai.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.taskBoardDetai = action.payload
                state.error = null
            })
            .addCase(taskBoardDetai.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default taskBoardDetailSlice.reducer
