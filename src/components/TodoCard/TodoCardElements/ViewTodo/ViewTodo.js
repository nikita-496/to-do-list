import React from "react"

export const ViewTodo = (props) => {
        const listTask = props.task.map((item) => {
           return <div>
           <input type = "checkbox" /> 
           <label key={item.key}>{item.text}</label>
           </div>
        })

        return <>
                {listTask}
                 <hr/>
            </>
    
}


