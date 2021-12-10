import {Todo} from "@entities";
import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {LocalStorageService} from "@services";

export type TodoState = Todo[];
const initialState: TodoState = LocalStorageService.getTodos();

export const todoSlice = createSlice<TodoState, SliceCaseReducers<TodoState>>({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<Todo>) => {
            state.push(action.payload);
            LocalStorageService.setTodos(state);
        },
    }
});


export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;