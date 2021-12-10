import {Todo} from "@entities";

export class RandomTodoService {
    private static ACTIONS = [

        'eat',

        'sleep',

        'sell',

        'buy',

        'destroy',

        'throw',

        'bury',

    ];

    private static OBJECTS = [

        'the banana',

        'the dog',

        'a fireman',

        'a dancing guy',

        'Station F',

        'the coffin',

    ];

    private static getRandomAction() {

        return this.ACTIONS[Math.floor(Math.random() * this.ACTIONS.length)];

    }

    private static getRandomObject() {

        return this.OBJECTS[Math.floor(Math.random() * this.OBJECTS.length)];

    }
    public static getRandomTodo(): Todo {
        return new Todo(`${this.getRandomAction()} ${this.getRandomObject()}`)
    }
}