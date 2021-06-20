import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

import './ViewTask.css'
import AllTask from './All/AllTask';



//Остановился здесь
class TaskItems extends Component {
  constructor(props) {
    super(props)
    this.state = {isComplate: false}
    this.handleIsComplate = this.handleIsComplate.bind(this)
  }
   handleIsComplate (e) {
    this.setState({isComplate: e.target.checked})
  }

render () {
  const isComplate = this.state.isComplate
  let taskType 
  if (isComplate) {
    taskType =  <label className="taskComplate">  {this.props.name} </label>
  } else {
    taskType =  <label>  {this.props.name} </label>
  }
    return <li>
    <input type="checkbox"  onClick={this.handleIsComplate} />
    {taskType}
    <button>Удалить</button>
    </li>
  }
}



function ViewTask (props)  {
  const tasks = props.tasks
  const taskItems = tasks.map((task) => 
    <TaskItems key={task.key} name={task.nameTask} isComplate={task.isComplate}/>
    )
  return <BrowserRouter>
    <Route path="/all" render={(props)=> <AllTask taskItems = {taskItems}/>} />
    <NavBar />
    
  </BrowserRouter>
  }


export default ViewTask