import React from "react"

export const AddToDo = (props) => {
        debugger
        const task = props.task
        debugger
        /*const handleTask = (e) => {
          props.addTask(e.target.value)
        }*/
        const handleText = (e) => {
          props.updateText(e.target.value)
        }
        debugger
        return <div>
                <input value={task} onChange={handleText} type="text" placeholder="Создать задачу"/>
                <input type="submit" value="Добавить"/>
                 <hr/>
            </div>
    
}


