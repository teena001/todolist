import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoLists extends Component {
   
  render() {
    const {data, clearList, onDelete, onEdit, completed} = this.props;

    return (
      <div className='list-holder'>
        <div className='mt-6 text-center'>
          <h3>Todo List</h3>
        </div>
        <ul>
     
        {  
        
        //  data.slice(0, 10).map(todoItem=>{ 
            data.map(todoItem=>{  
            return (
              <TodoItem
                  key={todoItem.id} 
                  id={todoItem.id} 
                  task={todoItem.title}  
                  completed={completed}
                  onDelete={onDelete}
                  onEdit={onEdit} 
                  todoItem={todoItem}
              />

            )
          })
        }
      {
         data.length < 1 &&
         <div className='holder'>No Items to Show</div>
      }
        
      </ul>
        

        <button type='button' className='btn btn-danger mt-6'  onClick={clearList}>Clear Task</button>
      </div>
    )
  }
}

export default TodoLists