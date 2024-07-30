import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { DEV_URL } from "../../../Api_url";


export const taskBoard = createAsyncThunk(
    'taskBoard/taskBoard',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${DEV_URL}taskboard/`,
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
    task: {},
    status: 'idle',
    error: null,
}

const taskBoardSlice = createSlice({
    name: 'taskBoard',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(taskBoard.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(taskBoard.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.task = action.payload
                state.error = null
            })
            .addCase(taskBoard.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default taskBoardSlice.reducer
