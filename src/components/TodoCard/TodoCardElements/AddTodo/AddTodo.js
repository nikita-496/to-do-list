import React from "react"

export const AddToDo = (props) => {
        //debugger
        const taskText = props.taskText
        //debugger
        const handleText = (e) => {
          props.updateText(e.target.value)
        }
        const handleTask = (e) => {
          props.createTask(e.target.value)
        }
        //debugger
        return <div>
                <input value={taskText} onChange={handleText} type="text" placeholder="Создать задачу"/>
                <button type="button" value={taskText} onClick={handleTask}>Добавить</button>
                 <hr/>
            </div>
    
}


