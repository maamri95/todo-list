import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppComponent from './App.component'
import {Provider} from "react-redux";
import {todoStore} from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={todoStore}>
      <AppComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
