import {Todo} from "@entities";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {LocalStorageService} from "@services";

export type TodoState = Todo[];
const initialState: TodoState = LocalStorageService.getTodos();

export const todoSlice = createSlice<TodoState, SliceCaseReducers<TodoState>>({
    name: 'todo',
    initialState,
    reducers: {}
});


export const {} = todoSlice.actions;
export default todoSlice.reducer;