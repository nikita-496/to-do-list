import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



class TaskRow extends Component {
  render() {
    const {name} = this.props
    return (
      <li>
        <input type="checkbox"/>
        {name}
        <button>Удалить</button>
        
      </li>
    )
  }
}

class TaskTable extends Component {
  render() {
    const {tasks} = this.props
    const listTask = tasks.map((task) => {
      return <TaskRow name={task.nameTask} key={task.id}/>
    })
    return (
      <ul>
        {listTask}
      </ul>
    )
  }
}
class NavBar extends Component {
  render() {
    return (
      <div>
        <p>NavBar</p>
        
        <a>Все</a>
        <a>Активные</a>
        <a>Завершенные</a>
      </div>
    )
  }
}
class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="введите задачу..."/>
        <button type="button">Добавить</button>
        <hr />
      </div>
    )
  }
}

class TodoCard extends Component {
  render() {
    const {tasks} = this.props
    return (
      <div>
        <SearchBar />
        <TaskTable tasks={tasks} />
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
  {nameTask: "Ужин", id: Date.now(), isCoding: false},
  {nameTask: "Прогулка", id: Date.now(), isCoding: false}
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
