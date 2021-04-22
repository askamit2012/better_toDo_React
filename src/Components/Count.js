import React from 'react'

function Count(props) {
    let finishedTasks =0, remainingTasks =0
    let myList = props.taskList
    myList.forEach(task => {
        task.isChecked ? finishedTasks++ : remainingTasks++
    })

    const countStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContet: 'center',
        alignItems: 'center',
        color: 'red',
        height: 'auto',
        fontSize: '20px',
        margin: '0 0 20px 0'
    }

    return (
        <div style={countStyle}> 
        {
            remainingTasks 
            ? 
            <div style={{color:'black', background:'#fff', padding:'0 20px'}}>Remaining Tasks: {remainingTasks}</div>
            :
            <></>
        }
        {
            finishedTasks
            ? 
            <div>Completed Tasks: {finishedTasks}</div>
            :
            <></>
        }
        </div>
    )
}

export default Count
