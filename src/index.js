import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';




function TaskTable (props) {
 function handleIsComplated (e, key = props.id) {
  props.updataComplated(e.target.checked, key)
  }
    return (
      <li>
      <input type="checkbox" onClick={handleIsComplated}/>
      {props.name}
      <button>Удалить</button>
    </li>
    )
  }

function NavBar (props) {
    return (
      <div>
        <p>NavBar</p>
        
        <NavLink to="all">Все</NavLink>
        <NavLink to="active">Активные</NavLink>
        <NavLink to="complated">Завершенные</NavLink>
      </div>
    )
}

function ComplateTaskTable (props) {
  const listTask = props.tasks.map((task) => {
    return <TaskTable name={task.name} key={task.key} id={task.key} updataComplated={props.updataComplated}/>
  })
  return(
    <ul>
      {listTask}
    </ul>
    
  )
}

function ActiveTaskTAble (props) {
return (
  <ul>
    Активные
  </ul>
)
}

class AllTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isComplated: false
    }
    this.updataComplated = this.updataComplated.bind(this)
  }

  updataComplated (isComplated, key) {
    this.setState({
      isComplated
    })
    this.props.updataTask(isComplated, key)
  }

  render () {
    const listTask = this.props.tasks.map((task) => {
      return <TaskTable name={task.name} key={task.key} id={task.key} updataComplated={this.updataComplated}/>
    })
    return(
      <ul>
        {listTask}
      </ul>
      
    )
  }
}

function SearchBar (props) {
  const nameTask = props.nameTask

    function handleTaskName (e) {
      props.createTask(e.target.value)
    }

    function handleTask (e) {
      props.addTask(e.target.value)
    }
    return (
      <div>
        <input type="text" placeholder="введите задачу..." value={nameTask} onChange={handleTaskName} />
        <button type="button" value={nameTask} onClick={handleTask}>Добавить</button>
        <hr />
      </div>
      )
}

class TodoCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      nameTask:"", 
      tasks: []
    }
    this.createTask = this.createTask.bind(this)
    this.addTask = this.addTask.bind(this)
    this.updataTask = this.updataTask.bind(this)
  }
  createTask(nameTask) {
    this.setState({
      nameTask
    })
  }
/*
  updataComplated(isComplated, key) {
    debugger
    let taskArray = this.state.tasks
    let complatedTask = taskArray.filter(task => task.key === key) 
    console.log(complatedTask)
  
    this.setState({
      isComplated
    })
    debugger
  }
  */
  updataTask(isComplated, key) {
   let n = this.state.tasks
    let f = n.filter(n => n.key === key)
    console.log (f)
    let c = {
      a:11,
      b:12
    }
    c.a=13
    console.log(c)
    debugger
  }

  addTask(name, isComplated = false) {
    let taskArray = this.state.tasks
    if (name !== "") {
      taskArray.unshift({
        name,
        key:Date.now(),
        isComplated
      })
      this.setState({
        nameTask: "",
        tasks: taskArray
      })
    }
  }

  render() {
    const {nameTask, tasks} = this.state
    return (
        <BrowserRouter>
        <SearchBar nameTask={nameTask} createTask={this.createTask} addTask={this.addTask}/>

        <Route path="/all" render={(props)=> <AllTask  tasks={tasks} updataTask={this.updataTask}/>}/>
      <Route path="/active"render={(props)=> <ActiveTaskTAble  tasks={tasks} />}/>
      <Route path="/complated" render={(props)=> <ComplateTaskTable  tasks={tasks}/>}/>

        <NavBar />
        </BrowserRouter>

    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <TodoCard />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
