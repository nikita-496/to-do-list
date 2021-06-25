import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';


function Complated (props) {
   
    function handleIsComplated(e) {
    const {checked} = e.target
    props.updateIsComplate(props.name, checked, props.id)
    }

    //сохранять соятосние чекбокса при новом рендеринге компоненты 
 
  return (
    <li>
      <input type="radio" onChange={handleIsComplated} checked={props.isComplated}/>
      <label>{props.name}</label>
      <button type="button">Удалить</button>
    </li>
  )
}

function Active (props) {
  function handleIsComplated(e) {
    props.updateIsComplate(props.name,e.target.checked, props.id)
    }

  return (
    <li>
      <input type="radio" onChange={handleIsComplated}/>
      <label>{props.name}</label>
      <button type="button">Удалить</button>
    </li>
  )
}

function Task (props) {
  function handleIsComplated(e) {
    const {checked} = e.target
    debugger
    props.updateIsComplate(props.name,checked, props.id)
  }
  let taskType 
  if(props.isComplated) {
    taskType = <>  
    <label className="complated">{props.name}</label>
    </>

  }else{
    taskType = <>  
    <label>{props.name}</label>
    </>
    
  }
  return (
    <li>
      <input type="radio" onChange={handleIsComplated} checked={props.isComplated}/>
      {taskType}
      <button type="button">Удалить</button>
    </li>
  )
}


function NavBar() {
  return(
    <div>
      <NavLink to="all">Все</NavLink>
      <NavLink to="active">Активные</NavLink>
      <NavLink to="complated">Завершенные</NavLink>
    </div>
  )
}
//Остановился на проблеме сохранения состояния при маршрутизации между задачами 
class TaskContainer extends Component  {
  constructor(props){
    super(props) 
    this.state = {
      isComplated: false
    }
    this.updateIsComplate = this.updateIsComplate.bind(this)
  }
  updateIsComplate(name, isComplated, key) {
    this.setState({
      isComplated
    })
    this.props.createTask(name, isComplated,key)
  }
  render() {
    const complatedTasks = this.props.tasks.filter(complate => complate.isComplated === true)
    const activeTasks = this.props.tasks.filter(active => active.isComplated === false)
    const tasks = this.props.tasks

    return(
      <BrowserRouter>
        <ul>
            {tasks.map((task)=>
            
                <Route path="/all" key={task.key} id={task.key} render={(props)=><Task name={task.name} key={task.key} id={task.key} isComplated={this.state.isComplated} updateIsComplate={this.updateIsComplate}/>}/>
             
            )}
            {activeTasks.map((task)=>
              
                <Route path="/active" key={task.key} id={task.key} render={(props)=><Active name={task.name} key={task.key} id={task.key}  isComplated={this.state.isComplated} updateIsComplate={this.updateIsComplate}/>}/>
              
            )}
            {complatedTasks.map((task)=>
             
                  <Route path="/complated" key={task.key} id={task.key} render={(props)=><Complated name={task.name} key={task.key} id={task.key}  isComplated={this.state.isComplated} updateIsComplate={this.updateIsComplate}/>}/>
             
            )}
        </ul>
        <NavBar/>
      </BrowserRouter>
    )
  }
}

function AddTask (props) {
  function handleTaskName(e){
    props.updateNameTask(e.target.value)
  }
  function AddNewTask(e){
    props.createTask(e.target.value)
  }
return(
  <div>
    <input type="text" placeholder="введит задачу..." value={props.taskName} onChange={handleTaskName}/>
    <button type="button" value={props.taskName} onClick={AddNewTask}> Добавить</button>
  </div>
)
}

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      taskName: '',
      tasks: []
    }
    this.updateNameTask = this.updateNameTask.bind(this)
    this.createTask = this.createTask.bind(this)
  }
   updateNameTask (taskName) {
    this.setState({
      taskName
    })
  }
  createTask(taskName, isComplated = false, key) {
    const taskArray = this.state.tasks

       //Обновить свойство isComplate состояния tasks
       function updateTask (isComplated,key) {
        let tasksCopy = JSON.parse(JSON.stringify(taskArray))
        let complatedTask = tasksCopy.filter(task => task.key === key)
        complatedTask[0].isComplated = isComplated
        return tasksCopy   
      }
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
    else if (isComplated) {
      this.setState({
        tasks: updateTask(isComplated, key)
      })
      
    } 
  }
  render() {
    const {taskName, tasks} = this.state
    return(
      <div>
        <AddTask taskName={taskName} updateNameTask={this.updateNameTask} createTask={this.createTask}/>
        <TaskContainer tasks={tasks} createTask={this.createTask}/>
      </div>
    )
  }
}

