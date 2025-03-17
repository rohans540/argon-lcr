import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, BOARDBYID, BOARDS, TASK } from "../constants";
import { CreateTaskRequestProps, BoardProps } from "./types";

export const getAllBoards: any = createAsyncThunk(
    'app/getAllBoards',
    async () => {
        try {
            return await axios.get(BASE_URL+BOARDS);
        } catch (error) {
            console.log(error)
        }
    }
)

export const getBoardById: any = createAsyncThunk(
    'app/getBoardById',
    async (id: number) => {
        try {
            return await axios.get(BASE_URL+BOARDBYID(id));
        } catch (error) {
            console.log(error)
        }
    }
)

export const createTask: any = createAsyncThunk(
    'app/createTask',
    async (request: CreateTaskRequestProps, { rejectWithValue }) => {
        try {
            return await axios.post(BASE_URL+TASK, request)
        } catch (error) {
            console.log(error)
            rejectWithValue(error?.response?.data)
        }
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState: {
        boards: [] as BoardProps[],
        currentBoard: {} as BoardProps,
        loading: false,
    },
    reducers: {
        setCurrentBoard: (state, action) => {
            state.currentBoard = action.payload;
        }
    },
    extraReducers(builder: any) {
        builder
            .addCase(getAllBoards.pending, (state: any) => {
                state.loading = true
            })
            .addCase(getAllBoards.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.boards = action.payload.data
                state.currentBoard = action.payload.data[0]
            })
            .addCase(getAllBoards.rejected, (state: any) => {
                state.loading = false
            })
    }
})

export const { setCurrentBoard } = appSlice.actions;
export default appSlice;