import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



class TodoCard extends Component {
  render() {
    const {tasks} = this.props
    return (
      <div>
        <SearchBar />
        <TaskTable tasks={tasks}/>
        <ActiveTaskTable tasks={tasks}/>
        <ComplateTaskTable tasks={tasks}/>
        <NavBar />
      </div>
    )
  }
}





const TASKS = [
  {nameTask: "Кодинг", id: Date.now(), isCoding: false},
  {nameTask: "Чтение", id: Date.now(), isCoding: false},
  {nameTask: "Обед", id: Date.now(), isCoding: false},
  {nameTask: "Спорт", id: Date.now(), isCoding: false},
  {nameTask: "Ужин", id: Date.now(), isCoding: false}
]

ReactDOM.render(
  <React.StrictMode>
    <TodoCard tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
