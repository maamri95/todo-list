import {Todo} from "../../entities/Todo.entity";
import {RandomTodoService} from "../RandomTodo/RandomTodo.service";

export const TodoService = {


    completedAt(todo:Todo): string {
        if (todo.completedAt) {
            return `${todo.completedAt.toLocaleTimeString()} ${todo.completedAt.toLocaleDateString()}`;
        }
        return "not completed yet";
    },

    completedAtJson(todo:Todo): string | undefined {
        return todo.completedAt?.toJSON();
    },

    buildTodo(description: string): Todo {
        return {
            id : Math.floor(Math.random() * 100000000),
            description : description,
            completed : false,
            completedAt : null
        }
    },
    buildRandomTodo(): Todo {
        return {
            id : Math.floor(Math.random() * 100000000),
            description : RandomTodoService.getRandomTodoDescription(),
            completed : false,
            completedAt : null
        }
    }
};