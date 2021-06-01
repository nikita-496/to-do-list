import React from "react"

export const AddToDo = (props) => {
        debugger
        const task = props.task
        debugger
        const handleTask = (e) => {
          props.addTask(e.target.value)
        }
        return <div>
                <input value={task} onChange={handleTask} type="text" placeholder="Добавить задачу"/>
                <input type="submit" value="Добавить"/>
                 <hr/>
            </div>
    
}


