import React, { Component } from 'react'

class TodoInput extends Component {
  render() {
    const {task, onChange, onSubmit, taskEdited} = this.props
 
    return (
      <div className='task-holder'> 
        <div><h3>Todo Input</h3></div>
        <form onSubmit={onSubmit}>        
            <input type="text"  value={task} placeholder="Type your task" onChange={onChange}
            />
            <button className={
              taskEdited ? 'btn btn-success' :
              "btn btn-primary"
            }>
              {taskEdited ? "Update Task" : "Add Task"}
              </button>  
        </form>
      </div>
    )
  }
}

export default TodoInput