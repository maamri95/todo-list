import {Todo} from "../../entities/Todo";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";

export type TodoState = Todo[];

const initialState: TodoState = [];

export const todoSlice = createSlice<TodoState, SliceCaseReducers<TodoState>>({
    name: 'todo',
    initialState,
    reducers: {}
});


export const {} = todoSlice.actions;
export default todoSlice.reducer;