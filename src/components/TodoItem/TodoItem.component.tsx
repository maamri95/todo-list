import {FC, useCallback} from "react";
import { TodoItemContainer } from "./TodoItem.styles";
import {Todo} from "../../entities";

interface TodoItemProps {
    todo: Todo;
    onToggle: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
}

export const TodoItem: FC<TodoItemProps> = ({todo, onToggle, onRemove}) => {
    const onClick = useCallback(() => {
        onRemove(todo);
    }, [onRemove, todo]);
    return (
        <TodoItemContainer>
            <label>
                <input type="checkbox" name="completed" checked={todo.completed} onChange={() => onToggle(todo)}/>
                {todo.description}
                <button onClick={onClick}>X</button>
            </label>
        </TodoItemContainer>
    )
}