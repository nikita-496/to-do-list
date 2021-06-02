import React, { Component } from "react"
import { AddToDo} from "./TodoCardElements/AddTodo/AddTodo"
import { ViewTodo} from "./TodoCardElements/ViewTodo/ViewTodo"
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
    }

    updateText (taskText) {
        this.setState({taskText})
    }
    
    createTask (nameTask) {
        
        let itemArray = this.state.task
        itemArray.unshift({
            text: nameTask, 
            key: Date.now()
        }) 
        
        this.setState({
            task: itemArray,
            taskText: ""
        })

        console.log(this.state.task)
    }

    /*deleteTask () {

    }*/


    render() {
        const {taskText} = this.state
        return <div className = "TodoCard">
                <AddToDo taskText={taskText} createTask={this.createTask} updateText ={this.updateText}/>
                <ViewTodo taskText={taskText}/>
                <TodoNavigation />
            </div>
    }
}