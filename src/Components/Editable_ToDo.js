import React from 'react'

function Editable_ToDo(props) {
    const task = props.task
    return (
        <div>
            <input placeholder={task.task} onChange={(e) => props.handleNewInput(e)} />
            <button onClick={() => props.handleModify()}>Modify</button>
            <button onClick={() => props.handleDelete()}>DEL</button>
        </div>
    )
}

export default Editable_ToDo
