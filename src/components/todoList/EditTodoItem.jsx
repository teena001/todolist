import React, { Component } from 'react'

export class EditTodoItem extends Component {
  render() {
    const {value,  onEditChange, onEditSubmit} = this.props;
    return (
        <div className='task-holder'>
        <form className='todo-form' onSubmit={onEditSubmit}>
            <input type='text' 
            className='todo-input'  
            onChange={onEditChange}
            value={value}
            />
            <button type='submit' className='todo-btn' >Update Task</button>
        </form>
        </div>
    )
  }
}

export default EditTodoItem