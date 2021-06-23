import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function AllTask (props) {
  function handleIsComplated (e, key = props.id) {
    props.markTask(e.target.checked, key)
    }

  return (
    <li>
      <input type="checkbox" onClick={handleIsComplated}/>
      {props.name}
      <button>Удалить</button>
    </li>
  )
}

function ComplateTaskContainer (props) {
  const tasks = props.tasks.filter(complate => complate.isComplated === true)

  return(
    <ul>
      {tasks.map((task) => 
        <AllTask name={task.name} key={task.key} id={task.key} markTask={props.markTask}/>
      )} 
    </ul>
  )
}

function ActiveTaskContainer(props) {
  const tasks = props.tasks.filter(active => active.isComplated === false)

  return(
    <ul>
      {tasks.map((task) => 
        <AllTask name={task.name} key={task.key} id={task.key} markTask={props.markTask}/>
      )} 
    </ul>
  )
}

function AllTaskContainer (props) {
  const tasks = props.tasks
  return(
    <ul>
      {tasks.map((task) => 
        <AllTask name={task.name} key={task.key} id={task.key} markTask={props.markTask}/>
      )} 
    </ul>
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

class TaskTable extends Component{
  constructor(props) {
    super(props) 
    this.state = {
      isComplated: false
    }
    this.markTask = this.markTask.bind(this)
  }
  markTask (isComplated,key) {
    this.props.addTask("", isComplated, key)
  }
  render(){
    return(
      <BrowserRouter>

        <Route path="/all" render={(props)=> <AllTaskContainer  tasks={this.props.tasks} markTask={this.markTask}/>}/>
        <Route path="/active"render={(props)=> <ActiveTaskContainer tasks={this.props.tasks} markTask={this.markTask}/>}/>
        <Route path="/complated" render={(props)=> <ComplateTaskContainer  tasks={this.props.tasks} markTask={this.markTask}/>}/>

      <NavBar />
      </BrowserRouter>
    )
  }
}

/*function TaskTable (props) {
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
   }*/

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
    
  }
  createTask(nameTask) {
    this.setState({
      nameTask
    })
  }


  addTask(name, isComplated = false, key) {
    let taskArray = this.state.tasks

    function updataTask(isComplated, key) {
      let tasksCopy = JSON.parse(JSON.stringify(taskArray))
      let complatedTAsk = tasksCopy.filter(task => task.key === key)
      complatedTAsk[0].isComplated = isComplated
      return tasksCopy      
     }

    if (name !== "" && !isComplated) {
      taskArray.unshift({
        name,
        key:Date.now(),
        isComplated
      })
      this.setState({
        nameTask: "",
        tasks: taskArray
      })
  } else if (isComplated) {
    this.setState({
      tasks: updataTask(isComplated, key)
    })
  }
}

  render() {
    const {nameTask, tasks} = this.state
    return (
      <div>
      <SearchBar nameTask={nameTask} createTask={this.createTask} addTask={this.addTask}/>
      <TaskTable tasks={tasks} addTask={this.addTask}/>
      </div>
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
