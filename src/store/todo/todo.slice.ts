
import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {LocalStorageService} from "../../services";
import {Todo} from "../../entities/Todo.entity";
import {TodoService} from "../../services/Todo/Todo.service";

export type TodoState = Todo[];
const initialState: TodoState = LocalStorageService.getTodos();


export const todoSlice = createSlice<TodoState, SliceCaseReducers<TodoState>>({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<Todo>) => {
            state.push(action.payload);
        },
        removeTodo: (state, action:PayloadAction<Todo>) => {
            state = state.filter(todo => todo.id !== action.payload.id);
            return state;
        },
        toggleTodo: (state, action:PayloadAction<Todo>) => {
            state.map(todo => {
                if (todo.id === action.payload.id) {
                    return TodoService.toggleTodo(todo);
                }
                return todo;
            });
        },
        updateTodo: (state, action:PayloadAction<Todo>) => {
            state.map(todo => {
                debugger
                if (todo.id === action.payload.id) {
                    todo.description = action.payload.description;
                }
                return todo;
            });
        },
    }
});


export const {addTodo, removeTodo, toggleTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;