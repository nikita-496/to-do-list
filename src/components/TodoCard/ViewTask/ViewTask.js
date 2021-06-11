import React, { Component } from 'react';
import { Route } from 'react-router';
import All from './All/AllTask';
import Active from './Active/Active';
import Complated from './Complated/Complated';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

import './ViewTask.css'

//Получить из список названий для каждой задачи
class  TaskItem extends Component {
  constructor(props) {
    super(props) 
    this.state = {isChecked: false}
  }
  
   handleComplate = () => {
     let e = !this.state.isChecked
     this.props.createTask(12, e)
    this.setState({isChecked: e})
    debugger
  }

  render () {
    let taskType
    if (this.state.isChecked) {
      taskType = <label className="taskComplate">{this.props.value}</label>
    } else {
      taskType = <label>{this.props.value}</label>
    }

    return <li className="taskItem">
      {/*Если пользователь кликнул по checkbox*/}
      <input type="checkbox" onChange={this.handleComplate}/>
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
return <BrowserRouter>
        <h1>ViewTask</h1>
        <Route path="/all" render={(props) => <All listItems={listItems}/>} />
        <Route path="/active" render={(props) => <Active />} />
        <Route path="/complated" render={(props) => <Complated />} />

        <NavBar />
          
</BrowserRouter>
}

export default ViewTask