import React, { Component } from 'react';
import { Route } from 'react-router';
import All from './All/AllTask';
import Active from './Active/Active';
import Complated from './Complated/Complated';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

import './ViewTask.css'

//Получить список названий для каждой задачи
class  TaskItem extends Component {
  constructor(props) {
    super(props) 
    this.state = {isChecked: false}
    
  }
  
   handleComplate = (e) => {
     this.props.createTask(this.props.value, e)
    this.setState({isChecked: e})
  }

  
  render () {
    let taskType
     //Если пользователь кликнул по checkbox
    if (this.state.isChecked) {
      taskType = <label className="taskComplate">{this.props.value}</label>
    } else {
      taskType = <label>{this.props.value}</label>
    }

    return <li className="taskItem">
      <input type="checkbox" onChange={() => this.handleComplate(!this.state.isChecked)}/>
      {taskType}
      <button>Удалить</button>
  </li>
  }  
}

const ViewTask = (props) => {
  
  const tasks = props.tasks
  const createTask = props.createTask
  const listItems = tasks.map (task => {
    return <TaskItem key={task.key} value={task.text} createTask={createTask}/>
  })
  const сomplatedTasks = tasks.filter(task => task.isComplate)
  console.log(сomplatedTasks)
return <BrowserRouter>
        <h1>ViewTask</h1>
        <Route path="/all" render={(props) => <All listItems={listItems}/>} />
        <Route path="/active" render={(props) => <Active />} />
        <Route path="/complated" render={(props) => <Complated сomplatedTasks={сomplatedTasks}/>} />

        <NavBar />
          
</BrowserRouter>
}

export default ViewTask