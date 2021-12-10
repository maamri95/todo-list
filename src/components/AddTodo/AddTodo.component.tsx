import {FC, FormEvent, useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {Todo} from "../../entities/Todo.entity";
import {addTodo} from "../../store/";
import {TodoService} from "../../services/Todo/Todo.service";
import { AddTodoForm } from "./AddTodo.styles";

interface AddTodoProps {
    onAddTodo: (todoText: string) => void;
    onRandom: () => void;
}

export const AddTodo: FC<AddTodoProps> = ({onAddTodo, onRandom}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        const todoDescription = inputRef.current!.value;
        if (todoDescription.trim().length > 0) {
            onAddTodo(todoDescription);
        }
        inputRef.current!.value = '';
    };
    return (
        <AddTodoForm onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <input type="text" ref={inputRef} placeholder="To do description"/>
            </div>
            <button type="submit">Add To do</button>
            <button onClick={onRandom}>Add Random</button>
        </AddTodoForm>
    )
};


interface AddTodoStoreProps {
}

export const AddTodoStore: FC<AddTodoStoreProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onAddTodo = useCallback((todoDescription: string) => {
        const todo = TodoService.buildTodo(todoDescription);
        dispatch(addTodo(todo));
    }, [dispatch]);
    const onRandom = () => {
      dispatch(addTodo(TodoService.buildRandomTodo()));
    }
    return (
        <div>
            <AddTodo onAddTodo={onAddTodo} onRandom={onRandom}/>
        </div>
    )
};