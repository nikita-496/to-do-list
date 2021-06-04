import React, { Component } from "react"
import Delete from "../../common/TodoCard/TodoCardElements/DeleteTask/DeleteTask"

//Все задачи
//Создание списка задач
const ListTask = (props) => {
	const tasks = props.tasks
	return <ul onDoubleClick={props.activateEditMode}>
			{tasks.map(task => (
       <ViewLlistItem key={task.key} 
          id={task.key} value={task.text} updateText={props.updateText}
          activateEditMode={props.activateEditMode} deleteTask={props.deleteTask} 
          deactivateEditMode={props.deactivateEditMode} editMode={props.editMode}/> 
      ))}
	</ul>
}


//Отображение окнкретной задаи для дальнейшей манипуляции с ней 
 class ViewLlistItem extends Component {
   constructor(props) {
     super(props)
     this.state = {
       editMode: false,
       taskText: this.props.value
      }
   }
   //создание фокусировки на поле ввода
   focusInput = (component) => {
    if (component) {
      component.focus();
    }
  };

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

  deleteItem = (key) => {
    this.props.deleteTask(key)    
}

handleTask = (e) => {
  this.setState({
    taskText: e.target.value
  })
  console.log(this.state.taskText)
}

  
  render() {
    return <li onDoubleClick={this.activateEditMode}>
        {!this.state.editMode ?
        <>
          <input type = "checkbox" /> 
          <label> {this.state.taskText} </label>
          <Delete id={this.props.id}  deleteItem={this.deleteItem} />
        </>
        :<>
          <input  type="text"  ref={this.focusInput} onBlur={this.deactivateEditMode} value={this.state.taskText} onChange={this.handleTask}/>
        </>
        }
      </li>
  } 
}

//Компонент, отображающий весь список задача
export default class AllTask extends Component  {
  render () {
    const {tasks, deleteTask, updateText} = this.props
    return <>
        <ListTask  tasks={tasks} deleteTask={deleteTask}  updateText={updateText}/> 
      <hr/>
    </>    
  }  
}
