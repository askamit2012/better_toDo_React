import './App.css';

import React, { Component } from 'react'
import TaskInput from './Components/TaskInput'
import SingleToDo from './Components/Single_ToDo'
import Count from './Components/Count'

export class App extends Component {

  constructor(){
    super()
    this.state = {
      taskVal: '',
      taskList: [],
      newTaskVal: ''
    }
    this.inputRef = React.createRef()
  }

  componentDidMount(){
    this.inputRef.current.focus()
  }

  handleInput = (e) => {
    this.setState({
      taskVal: e.target.value
    })
  }

  handleAddTask = () => {
    if(this.state.taskVal){
        const newTask = {
          task: this.state.taskVal,
          isChecked: false,
          isEditable: false
        }
        const myList = [...this.state.taskList]
        myList.push(newTask)
        this.setState({
          taskList: myList,
          taskVal: ''
        })
    } else {
        alert('Kindly Enter a Task')
    }    
  }

  handleCB = index => {
    console.log(index)
    const myList = [...this.state.taskList]
    myList[index].isChecked = !myList[index].isChecked
    this.setState({
      taskList: myList
    })
  }

  handleEdit = index => {
    const myList = [...this.state.taskList]
    myList[index].isEditable = !myList[index].isEditable
    this.setState({
      taskList: myList
    })
  }

  handleDelete = index => {
    const myList = [...this.state.taskList]
    myList.splice(index,1)
    this.setState({
      taskList: myList
    })
  }

  handleNewInput = e => {
    this.setState({
      newTaskVal: e.target.value
    })
  }
  
  handleModify = index => {
    if(this.state.newTaskVal){
      const myList = [...this.state.taskList]
      myList.splice(index,1)
      const newTask = {
        task: this.state.newTaskVal,
        isChecked: false,
        isEditable: false
      }
      myList.splice(index, 0, newTask)
      this.setState({
        taskList:myList,
        newTaskVal: ''
      })
    } else {
      alert('Kindly Enter a Task')
    }
    
  }

  render() {
    const {taskVal, taskList} = this.state
    console.log(taskVal, taskList)
    return (
      <div className="App">
         <h1>A better React ToDo</h1> 
         <Count taskList={taskList}/>
         <TaskInput handleInput={(e) => this.handleInput(e)}
                    handleAddTask={() => this.handleAddTask()}
                    taskVal={taskVal}
                    ref={this.inputRef}
          />
          
          {
            taskList.map((task, index) => <SingleToDo 
              key={index}
              task={task}
              handleCB={() => this.handleCB(index)}
              handleEdit={() => this.handleEdit(index)}
              handleDelete={() => this.handleDelete(index)}
              handleModify={() => this.handleModify(index)}
              handleNewInput={e => this.handleNewInput(e)}
            />)
          }
      </div>
    )
  }
}

export default App
