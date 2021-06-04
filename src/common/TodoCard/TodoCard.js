import React, { Component } from "react"
import { AddToDo} from "./TodoCardElements/AddTodo/AddTodo"

import { TodoNavigation} from "./TodoCardElements/TodoNavigation/TodoNavigation"

import './TodoCard.css'
import AllTask from "../../components/All/AllTask"
import { BrowserRouter, Route } from "react-router-dom"
import Active from "../../components/Active/Active"
import Complate from "../../components/Complated/Complated"


export default class TodoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskText: "",
            tasks: []
        }  
        this.updateText = this.updateText.bind(this)
        this.createTask = this.createTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    updateText (taskText) {
        this.setState({taskText})
    }
    
    createTask (nameTask) {
        if (this.state.taskText !== "") {
            let itemArray = this.state.tasks
            itemArray.unshift({
                text: nameTask, 
                key: Date.now()
            }) 
            
            this.setState({
                tasks: itemArray,
                taskText: ""
            })
        }  
    }

    deleteTask (key) {
      const filterTask = this.state.tasks.filter(task => task.key !== key)
      this.setState({
        tasks:filterTask
      })
    }
    updateTask (taskText) {
      this.setState({taskText})
  }
    render() {
        const {taskText, tasks} = this.state
        return <BrowserRouter>
                <div className = "TodoCard">
                  <AddToDo taskText={taskText} createTask={this.createTask} updateText ={this.updateText}/>
                  <Route path="/all" render={(props) => <AllTask tasks={tasks} deleteTask={this.deleteTask} updateText={this.updateText}/>} />
                  <Route  path="/active" render={(props) => <Active/>} />
                  <Route  path="/complate" render={(props) => <Complate/>} />
                  <TodoNavigation />
                </div>
            </BrowserRouter>
    }
}
