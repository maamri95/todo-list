import {FC} from "react";
import { TodoListContainer } from "./TodoList.styles";
import {Todo} from "../../entities";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({todos}) => {

  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListContainer>
  );
};