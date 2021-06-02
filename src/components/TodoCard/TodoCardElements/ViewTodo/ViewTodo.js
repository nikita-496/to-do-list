import React, { Component } from "react"
import Delete from "../DeleteTask/DeleteTask"

 export default class ViewTodo extends Component  {
        state = {editMode: false}

        activateEditMode = () => {
                this.setState({
                        editMode: true 
                })
        }

        deactivateEditMode = () => {
                this.setState({
                        editMode: false 
                })
        }

        handleTask = (e) => {
            this.props.updateText(e.target.value)
        }

        render () {
        const task = this.props.task

        const deleteItem = (key) => {
                this.props.deleteTask(key)    
        }
          
        const listTask = task.map((currentTask) => {
                return <div>
                        <input type = "checkbox" /> 
                        <label onDoubleClick={this.activateEditMode}>
                                {!this.state.editMode && currentTask.text}
                        </label>
                        {this.state.editMode && 
                                <div>
                                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={currentTask.text} onChange={this.handleTask}/>
                                </div>
                                
                                }
                        <Delete currentTask={currentTask} deleteItem={deleteItem}/>
                        
                   </div>
        })
        return <>
                {listTask}
                 <hr/>
                </>
            
        }
      
}




