import React from "react"

const Delete = (props) => {
        const currentTask = props.currentTask

        const deleteKey = (item) => {
                props.deleteItem(item)
        }

        return <span>
                <button type="button" onClick={() => deleteKey(currentTask.key)}>Удалить</button>
        </span>
    
}

export default Delete
