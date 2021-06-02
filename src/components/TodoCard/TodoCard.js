import React, { Component } from "react"
import { AddToDo} from "./TodoCardElements/AddTodo/AddTodo"
import  ViewTodo from "./TodoCardElements/ViewTodo/ViewTodo"
import { TodoNavigation} from "./TodoCardElements/TodoNavigation/TodoNavigation"

import './TodoCard.css'


export default class TodoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskText: "",
            task: []
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
            let itemArray = this.state.task
            itemArray.unshift({
                text: nameTask, 
                key: Date.now()
            }) 
            
            this.setState({
                task: itemArray,
                taskText: ""
            })
        }
       
    }

    deleteTask (key) {
      const filterTask = this.state.task.filter(task => task.key !== key)
      this.setState({
        task:filterTask
      })
    }


    render() {
        const {taskText, task} = this.state
        return <div className = "TodoCard">

                <AddToDo taskText={taskText} createTask={this.createTask} updateText ={this.updateText}/>
                <ViewTodo task={task} deleteTask={this.deleteTask} updateText={this.updateText}/>
                <TodoNavigation />

            </div>
    }
}