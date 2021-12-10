import {Todo} from "@entities";

export const LocalStorageService = {
    getTodos: () => {
        return Todo.fromJsonArray(JSON.parse(localStorage.getItem('todos') || '[]'));
    },
    setTodos: (todos: Todo[]) => {
        localStorage.setItem('todos', JSON.stringify(Todo.toJsonArray(todos)));
    },
    clear: () => {
        localStorage.clear();
    }
};
