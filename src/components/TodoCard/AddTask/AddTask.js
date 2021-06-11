import React from "react"

export const AddTask = (props) => {

        const taskText = props.taskText
        //1 и 2 
        const handleText = (e) => {
          props.updateText(e.target.value)
        }
        //4
        const handleTask = (e) => {
          props.createTask(e.target.value)
        }

        return <div>
                <input value={taskText} onChange={handleText} type="text" placeholder="Создать задачу"/>
                <button type="button" value={taskText} onClick={handleTask}>Добавить</button>
                 <hr/>
            </div>
    
}


