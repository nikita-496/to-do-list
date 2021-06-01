import React, { Component } from "react"
import { AddToDo} from "./TodoCardElements/AddTodo/AddTodo"
import { ViewTodo} from "./TodoCardElements/ViewTodo/ViewTodo"
import { TodoNavigation} from "./TodoCardElements/TodoNavigation/TodoNavigation"

import './TodoCard.css'

export default class TodoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: []
        }  
        this.addTask = this.addTask.bind(this)
    }

    addTask (e) {
        debugger
        let a = this.state.task
        debugger
        /*let newTask = {
            text: e,
            key: Date.now()
        }*/
        debugger
         a.push(e)
        debugger
        //debugger
        this.setState({
            task: a
        })
        debugger
    }
    

    render() {
        const {task} = this.state
        return <div className = "TodoCard">
                <AddToDo task={task} addTask={this.addTask} viewTask ={this.viewTask}/>
                <ViewTodo />
                <TodoNavigation />
            </div>
    }
}