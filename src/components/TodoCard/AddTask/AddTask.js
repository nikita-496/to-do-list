import React from "react"

 const AddTask = (props) => {
        const nameTask = props.nameTask

        const eventHandling = (func,e) => {
          func(e.target.value)
        }
        //2шаг алгоритма
        const handleName = (e) => {
          eventHandling(props.updateNameTask,e)
        }
        //з шаг алгоритма
        const handleTask = (e) => {
          if (e !== "") {
            eventHandling(props.createTask,e)
          }
        }

        return <div>
                <input value={nameTask} onChange={handleName} type="text" placeholder="Создать задачу"/>
                <button type="button" value={nameTask} onClick={handleTask}>Добавить</button>
                 <hr/>
            </div>
    
}

export default AddTask
