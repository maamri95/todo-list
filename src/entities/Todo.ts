export class Todo {
    private readonly _id: number;
    private _description: string;
    private _completed: boolean;
    private _completedAt: Date | null;

    constructor(description: string) {
        this._id = Math.floor(Math.random() * 100000000);
        this._description = description;
        this._completed = false;
        this._completedAt = null;
    }

    get id(): number {
        return this._id;
    }

    get description(): string {
        return this._description;
    }

    get completed(): boolean {
        return this._completed;
    }

    get completedAt(): string {
        if (this._completedAt) {
            return `${this._completedAt.toLocaleTimeString()} ${this._completedAt.toLocaleDateString()}`;
        }
        return "not completed yet";
    }

    get completedAtJson(): string | undefined {
        return this._completedAt?.toJSON();
    }

    set completedAt(completedAt: string | undefined) {
        this._completedAt = completedAt ? new Date(completedAt) : null;
    }

    set completed(completed: boolean) {
        this._completed = completed;
        if (completed) {
            this._completedAt = new Date();
        } else {
            this._completedAt = null;
        }
    }

    set description(description: string) {
        this._description = description;
    }

    private static fromJson(json: TodoJson): Todo {
        const todo = new Todo(json.description);
        todo._completed = json.completed;
        todo.completedAt = json.completedAt;
        return todo;
    }

    private static toJson(todo: Todo): TodoJson {
        return {
            id: todo.id,
            description: todo.description,
            completed: todo.completed,
            completedAt: todo.completedAtJson
        };
    }

    public static fromJsonArray(jsonArray: TodoJson[]): Todo[] {
        return jsonArray.map(Todo.fromJson);
    }

    public static toJsonArray(todos: []): TodoJson[] {
        return todos.map(Todo.toJson);
    }
}

type TodoJson = {
    id: number;
    description: string;
    completed: boolean;
    completedAt: string | undefined;
}