import React from 'react'
import EditableToDo from './Editable_ToDo'
const Single_ToDo = (props) => {
    const task = props.task
    console.log(task)
    return( 
        <div>
            {props.task.isEditable
            ?
                <EditableToDo 
                task={task} 
                handleNewInput={(e) => props.handleNewInput(e)}
                handleModify={() => props.handleModify()}
                handleDelete={() => props.handleDelete()}/>
            :
            props.task.isChecked 
            ? 
                <div style={{textDecoration: 'line-through'}}>
                    <input type='checkbox' onChange={() => props.handleCB()} checked={props.task.isChecked}/>
                    <span>{props.task.task}</span>
                    <button onClick={() => props.handleEdit()}>Edit</button>
                    <button onClick={() => props.handleDelete()}>DEL</button>
                </div>
            : 
                <div>
                    <input type='checkbox' onChange={() => props.handleCB()} checked={props.task.isChecked}/>
                    <span>{props.task.task}</span>
                    <button onClick={() => props.handleEdit()}>Edit</button>
                    <button onClick={() => props.handleDelete()}>DEL</button>
                </div>    
            }
            
        </div>
    )   
            
        
}

export default Single_ToDo
