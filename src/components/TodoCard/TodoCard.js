import React, { Component } from "react"
import { AddToDo} from "./TodoCardElements/AddTodo/AddTodo"
import { ViewTodo} from "./TodoCardElements/ViewTodo/ViewTodo"
import { TodoNavigation} from "./TodoCardElements/TodoNavigation/TodoNavigation"

import './TodoCard.css'

export default class TodoCard extends Component {
    render() {
        return <div className = "TodoCard">
                <AddToDo />
                <ViewTodo />
                <TodoNavigation />
            </div>
    }
}