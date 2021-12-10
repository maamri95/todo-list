import {FC, FormEvent, memo, useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "@store";
import {addTodo} from "@store";
import {TodoService} from "@services/Todo/Todo.service";
import {DiceIconMemo} from "@assets/Icons";

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
    return (<>
        <form onSubmit={todoSubmitHandler}>
            <div className="d-flex w-75 mx-auto align-items-center">
                <input className="form-control my-2 " type="text" ref={inputRef} placeholder="To do description"/>
                <button className="btn btn-dark" type="button" onClick={onRandom}><DiceIconMemo/></button>
            </div>
            <div className="d-flex gap-4 justify-content-center m-4" >
                <button className="btn btn-primary" type="submit">Add Task</button>
            </div>
        </form>
    </>);
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

export const AddTodoStoreMemo = memo(AddTodoStore);