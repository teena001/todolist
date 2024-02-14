import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoLists extends Component {
  render() {
    const {todoLists,clearList, onDelete, onEdit} = this.props;
    return (
      <div className='list-holder'>
        <div className='mt-6 text-center'>
          <h3>Todo List</h3>
        </div>
        <ul>
        { 
          todoLists.map(todoItem=>{
            return (
              <TodoItem 
                  key={todoItem.id} 
                  id={todoItem.id} 
                  task={todoItem.task} 
                  onEdit = {onEdit}
                  onDelete={onDelete}
              />
            )
          })
        }
      {
         todoLists.length < 1 &&
         <div>No Items to Show</div>
      }
        
      </ul>
        

        <button type='button' className='btn btn-danger mt-6' onClick={clearList}>Clear Task</button>
      </div>
    )
  }
}

export default TodoLists