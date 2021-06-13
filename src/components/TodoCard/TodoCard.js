import React, { Component } from "react"
import { AddTask } from "./AddTask/AddTask"
import './TodoCard.css'
import ViewTask from "./ViewTask/ViewTask"




export default class TodoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskText: "",
            tasks: []
        }  
        this.updateText = this.updateText.bind(this)
        this.updateTextTask = this.updateTextTask.bind(this)
        this.createTask = this.createTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
    }

    updateText (taskText) {
      this.setState({taskText})

    }

    updateTextTask (taskText) {
      this.setState({taskText})

    }
    
    createTask (nameTask, isComplate = false) {
        let itemArray = this.state.tasks
        if (this.state.taskText !== "" && !isComplate) {
            itemArray.unshift({
                text: nameTask, 
                key: Date.now(),
                isComplate
            }) 
            //если задача завершенная
        }else if (isComplate) {
          this.setState({
            tasks: itemArray[0].isComplate = isComplate
        })
        }
        this.setState({
          tasks: itemArray,
          taskText: ""
      })  
    }

    deleteTask (key) {
      const filterTask = this.state.tasks.filter(task => task.key !== key)
      this.setState({
        tasks:filterTask
      })
    }
    
    updateTask (newTask, key) {
      console.log(this.state.tasks)
      const objTask = this.state.tasks
        for (let i in objTask){
          if (objTask[i].key === key) {
            return objTask[i].text === newTask
          }
        }
    }
    
    render() {
          const {taskText, tasks} = this.state
          return <div className = "TodoCard">
                    <AddTask taskText={taskText} createTask={this.createTask} updateText ={this.updateText}/>
                    <ViewTask tasks={tasks} createTask={this.createTask}/>
                  </div>
             
  }
}
    

