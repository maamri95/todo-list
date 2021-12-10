import {RandomTodoService} from "../RandomTodo/RandomTodo.service";
import {Todo} from "../../entities/Todo.entity";


export const TodoService = {


    buildTodo(description: string): Todo {
        return {
            id : Math.floor(Math.random() * 100000000),
            description : description,
            completed : false,
            completedAt : null
        }
    },
    buildRandomTodo(): Todo {
        return this.buildTodo(RandomTodoService.getRandomTodoDescription())
    },

    toggleTodo(todo:Todo): Todo {
        todo.completed = !todo.completed;
        const date = new Date();

        todo.completedAt = todo.completed ? `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}` : null;
        return todo;
    }
};