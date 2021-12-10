import {FC, useCallback} from "react";
import {Todo} from "@entities/Todo.entity";
import {TodoItemStoreMemo} from "@components";
import {useSelector} from "react-redux";
import {RootState, TodoState} from "@store";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({todos}) => {

  return (
      <ul className="list-group todos-list">
        {todos.map(todo => (
            <TodoItemStoreMemo key={todo.id} todo={todo} />
        ))}
      </ul>
  );
};

interface TodoListStoreProps {
    showCompleted: boolean;
}

export const TodoListStore:FC<TodoListStoreProps> = ({showCompleted}) =>{
    const todos = useSelector<RootState, TodoState>(state => state.todos);
    const getVisibleTodos = useCallback(() => {
        return showCompleted ? todos : todos.filter(todo => !todo.completed);
    }, [showCompleted, todos]);
    return <TodoList todos={getVisibleTodos()}/>
}