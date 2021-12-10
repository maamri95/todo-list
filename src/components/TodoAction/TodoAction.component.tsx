import {FC, memo} from "react";
import {AddTodoStoreMemo} from "@components";

interface TodoActionProps {
    onFilterChange: () => void;
}

export const TodoAction: FC<TodoActionProps> = ({onFilterChange}) =>{
    return (
        <>
            <div className="form-group p-2">
                <input id="filter" className="form-check-input" type="checkbox" onChange={onFilterChange}/>
                <label className="form-check-label mx-2" htmlFor="filter">See the completed tasks</label>
            </div>
            <AddTodoStoreMemo/>
        </>
    );
};

export const TodoActionMemo = memo(TodoAction);