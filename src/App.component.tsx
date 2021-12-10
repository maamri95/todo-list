import { AppContainer, AppHeader, AppTitle } from './App.styles'
import {TodoList} from "./components/TodoList/TodoList.component";
import {RootState, TodoState} from "./store";
import {useSelector} from "react-redux";
import {AddTodoStore} from "./components/AddTodo/AddTodo.component";
import {useCallback, useEffect, useState} from "react";

function AppComponent() {
    const todos = useSelector<RootState, TodoState>(state => state.todos);
    const [showCompleted, setShowCompleted] = useState(false);
    const getVisibleTodos = useCallback(() => {
        return showCompleted ? todos : todos.filter(todo => !todo.completed);
    }, [showCompleted, todos]);
  return (
      <AppContainer>
        <AppHeader>
          <AppTitle>
            To Do List App
          </AppTitle>
            <label>
                <input type="checkbox" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)}/>
                Show completed
            </label>
            <AddTodoStore/>
        </AppHeader>
        <TodoList todos={getVisibleTodos()} />
      </AppContainer>
  )
}

export default AppComponent
