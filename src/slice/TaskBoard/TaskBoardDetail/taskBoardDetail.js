import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { DEV_URL } from "../../../Api_url";


export const fetchTaskBoardDetail = createAsyncThunk(
    'taskBoardDetail/fetchTaskBoardDetail',
    async ({ slug, page = 1 }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${DEV_URL}taskboard/${slug}/?page=${page}`,
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
    pagination: {
        current_page: 1,
        total_pages: 1,
        links: {},
        page_range: [],
    }
}


const taskBoardDetailSlice = createSlice({
    name: 'taskBoardDetail',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTaskBoardDetail.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTaskBoardDetail.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.task = action.payload
                state.error = null
                state.pagination = {
                    current_page: action.payload.tasks.current_page,
                    total_pages: action.payload.tasks.total_pages,
                    links: action.payload.tasks.links,
                    page_range: action.payload.tasks.page_range,
                }
            })
            .addCase(fetchTaskBoardDetail.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message || 'Something went wrong'
            })
    }
})

export default taskBoardDetailSlice.reducer
