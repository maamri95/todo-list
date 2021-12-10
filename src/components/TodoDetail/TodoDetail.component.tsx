import {FC, FormEvent, useCallback, useRef} from "react";
import {createPortal} from "react-dom";
import {Todo} from "@entities/Todo.entity";
import {useFetchImage} from "@utils/useFetchImage";
import {baseUrl} from "@config";
import {AppDispatch, updateTodo} from "@store";
import {useDispatch} from "react-redux";
import {CloseIconMemo, TrashIconMemo} from "@assets/Icons";
interface TodoDetailProps {
    todo: Todo;
    onClose: () => void;
    onToggle: () => void;
    onRemove: () => void;
    onUpdate: (todo: Todo) => void;
}

export const TodoDetail : FC<TodoDetailProps> = ({todo, onClose, onUpdate, onRemove}) => {
    const {image, loading} = useFetchImage(baseUrl)
    const inputRef = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = inputRef.current?.value;
        if (value) {
            onUpdate({...todo, description: value.length > 3 ? value : todo.description});
        }
        onClose();
    };
    return createPortal(
        <>
            <div className="modal fade show" id="modal" tabIndex={-1} role="dialog" style={{display: 'block'}}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title h4" id="modalLabel">
                                To do details : {todo.completed ? `Done on ${todo.completedAt}` : "To do"}
                            </h5>
                            <button type="button" className="btn btn-outline-close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                                <span aria-hidden="true"><CloseIconMemo/></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center align-items-center mx-auto my-5 cat-container" >
                                {loading ? <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only"/> </div>:
                                    <img src={image?? ""} width={"100%"} height={"100%"} className="rounded mx-auto d-block" alt="a cat to put a little cheerfulness in this TODO list"/>
                                }
                            </div>
                            <div className="container-fluid">
                                <form className="form-update mx-auto" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" ref={inputRef} defaultValue={todo.description}/>
                                    </div>
                                    <div className=" mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                        <button type="button" className="btn btn-xs btn-danger img-circle" onClick={onRemove}><TrashIconMemo/></button>
                                        <button type="button" onClick={onClose} className="btn btn-light">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"/>
        </>,
        document.body
    );
};


interface TodoDetailStoreProps {
    todo: Todo;
    onClose: () => void;
    onRemove: () => void;
    onToggle: () => void;
}

export const TodoDetailStore: FC<TodoDetailStoreProps> = ({todo, onClose, onRemove, onToggle}) =>{
    const dispatch = useDispatch<AppDispatch>();
    const onUpdate = useCallback((todo: Todo) => {
        dispatch(updateTodo(todo))
    }, [dispatch]);

    return <TodoDetail todo={todo} onClose={onClose} onUpdate={onUpdate} onRemove={onRemove} onToggle={onToggle}/>

}