import React, { Component } from 'react'

class TodoForm extends Component {
  render() {
    const {value, handleSubmit, onChange} = this.props;
    return (
        <div className='task-holder'>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' 
            className='todo-input' 
            placeholder='Enter Task Name' 
            onChange={onChange}
            value={value}
            />
            <button type='submit' className='todo-btn' >Add Task</button>
        </form>
        </div>
    )
  }
}

export default TodoForm