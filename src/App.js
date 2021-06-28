import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';

function ListComplatedTasks (props){
  function handleIsComplated  (e, taskName=props.name, key=props.id) {
    const {checked} = e.target
   props.createTask(taskName, checked, key)
  }

    let typeTask 
    (props.isComplated) ? typeTask =  <label className="complated">{props.name}</label> 
     :typeTask =  <label>{props.name}</label> 
    return (
      <li  className = "wrapper">
        <input 
              type="checkbox" 
              name="isComplated" 
              checked={props.isComplated}
              onChange={handleIsComplated} 
        />
        {typeTask}
        <button type="button">Удалить</button>
      </li>
    )
  }

function ListActiveTasks (props){
  function handleIsComplated  (e, taskName=props.name, key=props.id) {
    const {checked} = e.target
   props.createTask(taskName, checked, key)
  }

    let typeTask 
    (props.isComplated) ? typeTask =  <label className="complated">{props.name}</label> 
     :typeTask =  <label>{props.name}</label> 
    return (
      <li  className = "wrapper">
        <input 
              type="checkbox" 
              name="isComplated" 
              checked={props.isComplated}
              onChange={handleIsComplated} 
        />
        {typeTask}
        <button type="button">Удалить</button>
      </li>
    )
  }

function ListAllTasks (props){
  function handleIsComplated  (e, taskName=props.name, key=props.id) {
    const {checked} = e.target
   props.createTask(taskName, checked, key)
  }

    let typeTask 
    (props.isComplated) ? typeTask =  <label className="complated">{props.name}</label> 
     :typeTask =  <label>{props.name}</label> 
    return (
      <li className = "wrapper">
        <input 
              type="checkbox" 
              name="isComplated" 
              checked={props.isComplated}
              onChange={handleIsComplated} 
        />
        {typeTask}
        <button type="button">Удалить</button>
      </li>
    )
  }


function ComplatedTask (props) {
  const complated = props.tasks.filter(task => task.isComplated === true)
    const listComplatedTasks = complated.map((task)=>
    <ListComplatedTasks  name={task.name} key={task.key} id={task.key} isComplated={task.isComplated} createTask={props.createTask}/> )
    return( 
      <ul>
       {listComplatedTasks}
      </ul>
    )
}

function ActiveTask (props) {
  const active = props.tasks.filter(task => task.isComplated === false)
    const listActiveTasks = active.map((task)=>
    <ListActiveTasks  name={task.name} key={task.key} id={task.key} isComplated={task.isComplated} createTask={props.createTask}/> )
  return( 
    <ul>
    {listActiveTasks}
   </ul>
  )
}

function AllTask (props){
  const listTasks = props.tasks.map((task)=>
    <ListAllTasks  name={task.name} key={task.key} id={task.key} isComplated={task.isComplated} createTask={props.createTask}/> )
    return( 
      <ul>
       {listTasks}
      </ul>
  
    )
}
 
function NavBar() {
  return(
    <div className="navigation">
      <div>
        <button className="btn-all">
          <NavLink className= "link" to="all">Все</NavLink>
        </button>
        <button className="btn-active">
         <NavLink className= "link"to="active">Активные</NavLink>
        </button>
        <button className="btn-complated">
          <NavLink className= "link" to="complated">Завершенные</NavLink>
      </button>
      </div>
      <span>Удалить завершенные</span>
    </div>
  )
}

function AddTask  (props) {
   function handleTaskName (e) {
    props.updateNameTask(e.target.value)
  }
   function AddNewTask (e) {
    props.createTask(e.target.value)
  }

    return(
       <form className="form">
          <div className="form-item"> 
            <textarea type="text" placeholder="Введите задачу..." value={props.taskName} onChange={handleTaskName}/>
            <label className="title">Создать задачу</label>
          </div>
          <button type="button" value={props.taskName} onClick={AddNewTask}> Создать</button>
      </form>
    )
}

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      taskName: '',
      tasks: [], 
      isComplated: false 
    }
    this.updateNameTask = this.updateNameTask.bind(this)
    this.createTask = this.createTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
  }
   updateNameTask (taskName) {
    this.setState({
      taskName
    })
  }

  updateTask (isComplated, key) {
    const taskArray = this.state.tasks
    let tasksCopy = JSON.parse(JSON.stringify(taskArray))
    let complatedTask = tasksCopy.filter(task => task.key === key)
    complatedTask[0].isComplated = isComplated
    complatedTask[0].key = Date.now()
    this.setState({
      tasks: tasksCopy
    })  
  } 

  createTask(taskName, isComplated = false, key) {
    
    const taskArray = this.state.tasks
    
    //введенная задача не пустая строка
    if(taskName !== "" && key === undefined) {
      
      taskArray.unshift({
        name: taskName,
        key: Date.now(),
        isComplated
      })
      this.setState({
        taskName: "",
        tasks: taskArray
      })
      
    }
    //задача помечена как завершенная
    else if ((isComplated || !isComplated) && taskName !== "") {
      this.updateTask(isComplated,key) 
    } 
  }

  render() {
    const {taskName, tasks} = this.state
    return(
      <BrowserRouter>
      <div className="App"> 
      <div>
       <AddTask taskName={taskName} updateNameTask={this.updateNameTask} createTask={this.createTask}/>
      </div>

      <div>
       <Route path="/all" render={(props)=> <AllTask tasks={tasks} updateNameTask={this.updateNameTask} createTask={this.createTask}/>}/>
        
       <Route path="/active" render={(props)=> <ActiveTask tasks={tasks} createTask={this.createTask} />}/>
        
       <Route path="/complated" render={(props)=>  <ComplatedTask tasks={tasks} createTask={this.createTask} />}/>
      </div>
        
      <div>
        <NavBar />
      </div>
      </div>
      </BrowserRouter>
    )
  }
}

