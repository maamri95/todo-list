import {FC, useCallback} from "react";
import { TodoItemContainer } from "./TodoItem.styles";
import {Todo} from "../../entities/Todo.entity";
import {useDispatch} from "react-redux";
import {AppDispatch, removeTodo, toggleTodo} from "../../store";

interface TodoItemProps {
    todo: Todo;
    onToggle: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
}

export const TodoItem: FC<TodoItemProps> = ({todo, onToggle, onRemove}) => {
    const onClick = useCallback(() => {
        onRemove(todo);
    }, [onRemove, todo]);
    const onHandleChange = useCallback(() => {
        onToggle(todo);
    }, [onToggle, todo]);
    return (
        <TodoItemContainer>
            <label>
                <input type="checkbox" name="completed" checked={todo.completed} onChange={onHandleChange}/>
                {todo.description}
                <button onClick={onClick}>X</button>
            </label>
        </TodoItemContainer>
    )
}

interface TodoItemStoreProps {
    todo: Todo;
}

export const TodoItemStore : FC<TodoItemStoreProps> = ({todo}) => {
    const dispatch = useDispatch<AppDispatch>();
    const onToggle = useCallback((todo: Todo) => {
        dispatch(toggleTodo(todo));
    }, [dispatch, todo]);
    const onRemove = useCallback((todo: Todo) => {
        dispatch(removeTodo(todo));
    }, [dispatch, todo]);
    return (
        <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove}/>
    )
}