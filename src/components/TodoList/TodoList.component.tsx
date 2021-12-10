export const TodoList = (props: TodoListProps) => {
  const { todos, onTodoClick } = props;

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
};