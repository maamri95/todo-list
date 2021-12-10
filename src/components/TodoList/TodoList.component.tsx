import {FC} from "react";
import { TodoListContainer } from "./TodoList.styles";
import {Todo} from "../../entities/Todo.entity";
import {TodoItemStore} from "../TodoItem/TodoItem.component";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({todos}) => {

  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoItemStore key={todo.id} todo={todo} />
      ))}
    </TodoListContainer>
  );
};