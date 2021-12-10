import { AppContainer, AppHeader, AppTitle } from './App.styles'
import {TodoList} from "./components/TodoList/TodoList.component";
import {RootState, TodoState} from "./store";
import {useSelector} from "react-redux";
import {AddTodoStore} from "./components/AddTodo/AddTodo.component";

function AppComponent() {
    const todos = useSelector<RootState, TodoState>(state => state.todos);
  return (
      <AppContainer>
        <AppHeader>
          <AppTitle>
            To Do List App
          </AppTitle>
            <AddTodoStore/>
        </AppHeader>
        <TodoList todos={todos} />
      </AppContainer>
  )
}

export default AppComponent
