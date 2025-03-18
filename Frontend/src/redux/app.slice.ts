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

export const createBoard: any = createAsyncThunk(
    'app/createBoard',
    async (request: CreateTaskRequestProps, { rejectWithValue }) => {
        try {
            return await axios.post(BASE_URL+BOARDS, request)
        } catch (error) {
            console.log(error)
            rejectWithValue(error?.response?.data)
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
        createBoardSuccess: false,
        openForm: false,
        openTaskForm: false,
        loading: false,
    },
    reducers: {
        setCurrentBoard: (state, action) => {
            state.currentBoard = action.payload;
        },
        setOpenForm: (state, action) => {
            state.openForm = action.payload
        },
        setOpenTaskForm: (state, action) => {
            state.openTaskForm = action.payload
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

            .addCase(createBoard.pending, (state: any) => {
                state.loading = true
            })
            .addCase(createBoard.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.boards = [ ...state.boards, action.payload.data ]
                state.createBoardSuccess = true
            })
            .addCase(createBoard.rejected, (state: any) => {
                state.loading = false
            })
            .addCase(createTask.pending, (state: any) => {
                state.loading = true
            })
            .addCase(createTask.fulfilled, (state: any, action: any) => {
                state.loading = false;
                const board = state.boards.find((board) => board.id === action.payload.data.boardId);
                if(board) {
                    board.tasks = [ ...board.tasks, action.payload.data ]
                }
                if(state.currentBoard.id === action.payload.data.boardId) {
                    state.currentBoard.tasks = [ ...state.currentBoard.tasks, action.payload.data ]
                }
            })
            .addCase(createTask.rejected, (state: any) => {
                state.loading = false
            })
    }
})

export const { setCurrentBoard, setOpenForm, setOpenTaskForm } = appSlice.actions;
export default appSlice;