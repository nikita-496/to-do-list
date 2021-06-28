import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';

class ListTasks extends Component  {
  constructor(props) {
    super(props)
    /*this.state = {
      isComplated: false 
    }*/
    this.handleIsComplated = this.handleIsComplated.bind(this)
  }
  
  handleIsComplated = (e, taskName = this.props.name, key=this.props.id) => {
    const {checked} = e.target
    this.props.createTask(taskName, checked, key)
    /*this.setState({
      isComplated : e.target.checked
    })*/
  }

  /*handleIsComplated = (e, taskName = this.props.name, key=this.props.id) =>{
    this.props.createTask(taskName, e.target.checked, key)
  }*/
  render () {  
    return (
      <li>
        <input 
              type="checkbox" 
              name="isComplated" 
              checked={this.props.isComplated}
              onChange={this.handleIsComplated} 
        />
        <label>{this.props.name}</label>
        <button type="button">Удалить</button>
        <div>Above checkbox is {this.props.isComplated ? "checkbox" : "un-checked"} </div>
      </li>
    )
  }

}

function ComplatedTask (props) {
  return( 
    <>
    </>

  )
}

function ActiveTask (props) {
  return( 
    <>
    </>

  )
}

function AllTask (props){
    //const typeTask 
    const listTasks = props.tasks.map((task)=>
    <ListTasks  name={task.name} key={task.key} id={task.key} isComplated={task.isComplated} createTask={props.createTask}/> )
  
    return( 
      <ul>
       {listTasks}
      </ul>
  
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
      tasks: [], 
      isComplated: false 
    }
    this.updateNameTask = this.updateNameTask.bind(this)
    this.createTask = this.createTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    //this.handleIsComplated = this.handleIsComplated.bind(this)
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
      
       //Обновить свойство isComplate состояния tasks
       /*function updateTask (isComplated, key) {
        let tasksCopy = JSON.parse(JSON.stringify(taskArray))
        let complatedTask = tasksCopy.filter(task => task.key === key)
        complatedTask[0].isComplated = isComplated
        return this.setState({
          tasks: tasksCopy
        })   
      }*/

    //введенная задача не пустая строка
    if(taskName !== "" && key == undefined) {
      
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
    else if (isComplated || !isComplated) {
      this.updateTask(isComplated,key) 
    } 
  }


  render() {
    const {taskName, tasks, isComplated} = this.state
    return(
      <BrowserRouter>
       <AddTask taskName={taskName} updateNameTask={this.updateNameTask} createTask={this.createTask}/>

       <Route path="/all" render={(props)=> <AllTask tasks={tasks} updateNameTask={this.updateNameTask} createTask={this.createTask}/>}/>
        
       <Route path="/active" render={(props)=> <ActiveTask tasks={tasks} createTask={this.createTask} />}/>
        
       <Route path="/complated" render={(props)=>  <ComplatedTask tasks={tasks} createTask={this.createTask} />}/>
        

        <NavBar />
      </BrowserRouter>
    )
  }
}

