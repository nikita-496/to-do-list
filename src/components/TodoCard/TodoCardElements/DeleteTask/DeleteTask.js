import React from "react"

const Delete = (props) => {
        const id = props.id

        const deleteKey = (item) => {
                props.deleteItem(item)
        }

        return <span>
                <button type="button" onClick={() => deleteKey(id)}>Удалить</button>
        </span>
    
}

export default Delete
