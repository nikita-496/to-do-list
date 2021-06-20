import React, { Component } from "react"
import  AddTask  from "./AddTask/AddTask"
import  ViewTask  from "./ViewTask/ViewTask"
import './TodoCard.css'


export default class TodoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameTask: "",
            tasks: []
          }
          this.updateNameTask = this.updateNameTask.bind(this)
          this.createTask = this.createTask.bind(this)
        }
  // 2 шаг алгоритма
  updateNameTask (nameTask) {
      this.setState({
        nameTask
      })
  
  }
  // 4 шаг алгоритма
  createTask (nameTask) {
    const itemTasks = this.state.tasks
    itemTasks.unshift({
      nameTask,
      key: Date.now(),
      isComplate: false
    })
    this.setState({
      nameTask: "",
      tasks: itemTasks
    })
  }

  render () {
    const {nameTask, tasks} = this.state
    return <div>
          <AddTask nameTask={nameTask} updateNameTask={this.updateNameTask} createTask = {this.createTask}/>
          {/* 6 шаг*/}
          <ViewTask tasks={tasks}/>
    </div>
  }
}
 
    

