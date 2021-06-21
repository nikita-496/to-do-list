import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

import './ViewTask.css'
import AllTask from './All/AllTask';
import Active from './Active/Active';
import Complate from './Complated/Complate';

//Вывод списка отрисованных задач
class TaskItems extends Component {
  constructor(props) {
    super(props)
    //Метка задачи
    this.state = {isComplate: false}
    this.handleIsComplate = this.handleIsComplate.bind(this)
  }
   handleIsComplate (e) {
    //this.props.createComplatedTasks(e.target.checked, this.props.id)
    this.setState({isComplate: e.target.checked})
  }

render () {
  //отформатировать задачу
  const isComplate = this.state.isComplate
  let taskType
  
    //Пользоваетль нажал завершить задачу?
    if (isComplate) { //Если да, определяем кликнутую задачу 
    taskType =  <label className="taskComplate">  {this.props.name} </label> //форматируем задачу
    //ОСТАНОВИЛСЯ СДЕСЬ
    this.props.a(this.props.name)
    debugger
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
  //ОСТАНОВИЛСЯ СДЕСЬ
  function a (name) {
    alert(name)
  }
  //отрисовка "всех задач"
  const taskItems = tasks.map((task) => 
    <TaskItems key={task.key} id={task.key} name={task.nameTask} a={a}/>
    )

  return <BrowserRouter>
    <Route path="/all" render={(props)=> <AllTask taskItems = {taskItems}/>} />
    <Route path="/active" render={(props)=> <Active taskItems = {taskItems}/>} />
    <Route path="/complated" render={(props)=> <Complate taskItems = {taskItems}/>} />
    <NavBar />
    
  </BrowserRouter>
}

export default ViewTask

