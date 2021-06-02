import React from "react"
import Delete from "../DeleteTask/DeleteTask"

export const ViewTodo = (props) => {
        const task = props.task

        const deleteItem = (key) => {
                props.deleteTask(key)    
        }

        const listTask = task.map((currentTask) => {
           return <div>
           <input type = "checkbox" /> 
           <label  key={currentTask.key}>{currentTask.text}</label>
           <Delete currentTask={currentTask} deleteItem={deleteItem}/>
           </div>
        })
        
        return <>
                {listTask}
                 <hr/>
            </>
    
}


