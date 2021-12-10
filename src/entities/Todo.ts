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
}