import React, { Component } from "react"
import { AddToDo} from "./TodoCardElements/AddTodo/AddTodo"
import { ViewTodo} from "./TodoCardElements/ViewTodo/ViewTodo"
import { TodoNavigation} from "./TodoCardElements/TodoNavigation/TodoNavigation"

import './TodoCard.css'

export default class TodoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskText: ""
        }  
        //this.addTask = this.addTask.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    updateText (taskText) {
        this.setState({taskText})
    }

    /*addTask (e) {
        debugger
        let a = this.state.task
        debugger
         a.unshift(e)
        debugger
        //debugger
        this.setState({
            task: a
        })
        debugger
    }*/
   

    render() {
        const {taskText} = this.state
        return <div className = "TodoCard">
                <AddToDo taskText={taskText} addTask={this.addTask} updateText ={this.updateText}/>
                <ViewTodo />
                <TodoNavigation />
            </div>
    }
}