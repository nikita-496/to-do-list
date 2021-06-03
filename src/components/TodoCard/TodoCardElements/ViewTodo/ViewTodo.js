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

        editTask = (e) => {
            console.log(e.target.value)
        }

				deleteItem = (key) => {
					this.props.deleteTask(key)    
			}

      render () {
      const task = this.props.task
			let editMode 
			
    	const listTask = task.map((currentTask) => {
				debugger
        return <div>
						{!this.state.editMode ? 
						editMode = <div>
            	<input type = "checkbox" /> 
              <label onDoubleClick={this.activateEditMode} key={currentTask.key}> {currentTask.text} </label>
							<Delete currentTask={currentTask} deleteItem={this.deleteItem}/>        
							</div> 
						: editMode =  <div>
								<input type="text" onBlur={this.deactivateEditMode} value = {currentTask.text} onChange={this.editTask}/>
							</div>
						}
            </div>
        })
			
        return <>
          {listTask}
          <hr/>
        </>
            
        }
      
}




