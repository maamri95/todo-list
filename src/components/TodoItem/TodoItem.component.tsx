import {FC, memo, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import cx from "classnames";
import {Todo} from "../../entities/Todo.entity";
import {TrashIconMemo} from "../../assets/Icons";
import {TodoDetailStore} from "../TodoDetail/TodoDetail.component";
import {AppDispatch, removeTodo, toggleTodo} from "../../store";

interface TodoItemProps {
    todo: Todo;
    onToggle: () => void;
    onRemove: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({todo, onToggle, onRemove}) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpenModal = useCallback(() => {
        setIsOpen(open => !open);
    }, []);
    return (
        <li className={cx('list-group-item clearfix d-flex justify-content-between', todo.completed && ' list-group-item-success')}>
            <div className="form-group">
                <div className=" mx-2 d-flex gap-2">
                    <input className="form-check-input" type="checkbox" checked={todo.completed} onChange={onToggle}/>
                    <span className="m-0 cursor-pointer" onClick={onOpenModal}>{todo.description}</span>
                </div>
            </div>
            <div className="d-flex gap-2">
                <button type="button" className="btn btn-xs btn-danger img-circle" onClick={onRemove}><TrashIconMemo/></button>
            </div>
            {isOpen && <TodoDetailStore todo={todo} onClose={onOpenModal} onToggle={onToggle} onRemove={onRemove}/>}
        </li>
    )
}

interface TodoItemStoreProps {
    todo: Todo;
}

export const TodoItemStore : FC<TodoItemStoreProps> = ({todo}) => {
    const dispatch = useDispatch<AppDispatch>();
    const onToggle = useCallback(() => {
        dispatch(toggleTodo(todo));
    }, [dispatch, todo]);
    const onRemove = useCallback(() => {
        dispatch(removeTodo(todo));
    }, [dispatch, todo]);
    return (
        <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove}/>
    )
}

export const TodoItemStoreMemo = memo(TodoItemStore);