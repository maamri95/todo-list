import {configureStore, MiddlewareAPI} from "@reduxjs/toolkit";
import todoReducer from "./todo/todo.slice";
import {LocalStorageService} from "../services";


export const todoStore = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: [
        ({ getState }: MiddlewareAPI) => {
            return next => action => {
                const result = next(action);
                LocalStorageService.setTodos(getState().todos);
                return result;
            }
        }
    ]
});

export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;