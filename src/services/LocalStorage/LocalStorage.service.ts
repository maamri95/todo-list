import type {Todo} from "@entities/Todo.entity";

export const LocalStorageService = {
    getTodos: () => {
        return JSON.parse(localStorage.getItem('todos') || '[]');
    },
    setTodos: (todos: Todo[]) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
};
