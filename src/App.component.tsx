
import {useCallback, useState} from "react";
import {TodoActionMemo, TodoListStore} from "./components";


function AppComponent() {
    const [showCompleted, setShowCompleted] = useState(false);
    const onFilterChange = useCallback(() => {
        setShowCompleted(!showCompleted);
    }, [showCompleted]);
  return (
      <div className="card todos-container">
          <h1 className="title p-2">To do:</h1>
          <TodoListStore showCompleted={showCompleted}/>
          <TodoActionMemo onFilterChange={onFilterChange}/>
      </div>
  )
}

export default AppComponent
