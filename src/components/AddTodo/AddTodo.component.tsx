import {FC, FormEvent, useRef} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {Todo} from "../../entities";
import {addTodo} from "../../store/";

interface AddTodoProps {
    onAddTodo: (todoText: string) => void;
}

export const AddTodo: FC<AddTodoProps> = ({onAddTodo}) => {
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
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <input type="text" ref={inputRef} placeholder="To do description"/>
            </div>
            <button type="submit">Add To do</button>
        </form>
    )
};


interface AddTodoStoreProps {
}

export const AddTodoStore: FC<AddTodoStoreProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onAddTodo = (todoDescription: string) => {
        const todo = new Todo(todoDescription);
        dispatch(addTodo(todo));
    };
    return (
        <div>
            <AddTodo onAddTodo={onAddTodo}/>
        </div>
    )
};