import type {Todo} from "@entities";
import {TodoService} from "../Todo/Todo.service";

export const LocalStorageService = {
    getTodos: () => {
        return JSON.parse(localStorage.getItem('todos') || '[]');
    },
    setTodos: (todos: Todo[]) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },
    clear: () => {
        localStorage.clear();
    }
};
