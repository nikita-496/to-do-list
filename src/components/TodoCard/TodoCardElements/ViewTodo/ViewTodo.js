import React, { Component } from "react"
import Delete from "../DeleteTask/DeleteTask"

const ViewLlistItem = (props) => {
	return <div>
			<input type = "checkbox" /> 
			<label onDoubleClick={props.activateEditMode}> {props.value} </label>
			<Delete id={props.id}  deleteItem={props.deleteItem} />
	</div>
}

const ListTask = (props) => {
	const tasks = props.tasks
	const listItems = tasks.map((task) => {
		return <ViewLlistItem key={task.key} id={task.key} value={task.text} activateEditMode={props.activateEditMode} deleteItem={props.deleteItem}/> 
	})
	return <div>
			{listItems}
	</div>
}

const ViewEditMode = (props) => {
	return  <div>
		<input type="text" autoFocus={true} onBlur={props.deactivateEditMode}/>
	</div>
}


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
				const {tasks} = this.props
        return <>
				{!this.state.editMode 
					? <ListTask tasks={tasks} deleteItem={this.deleteItem} activateEditMode={this.activateEditMode} deactivateEditMode={this.deactivateEditMode}/ > 
					: <ViewEditMode deactivateEditMode={this.deactivateEditMode}/>
				}
          
          <hr/>
        </>    
      }  
}




/*
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
	*/