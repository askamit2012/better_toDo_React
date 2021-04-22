import React from 'react'

const TaskInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input onChange={e => props.handleInput(e)} value={props.taskVal} ref={ref}/>
            <button onClick={() => props.handleAddTask()}>Add Task</button>
        </div>
    )
})

export default TaskInput
