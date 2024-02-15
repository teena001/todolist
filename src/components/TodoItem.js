import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const {task, id, onDelete, onEdit} = this.props;
    return (
       
        <li className='list-group-item d-flex justify-content-between '>
            
            <div className="card" id={id}> 
                <div className="card-body">
                    <div className='row'>
                        <div className='col-12'><h5 className="card-title">{task}</h5></div>
                        <div className='col-12 text-start'>
                            <span className='text-primary' onClick={()=>onEdit(id)}><i className='fa fa-edit'></i></span>
                            <span className='text-danger' onClick={()=>onDelete(id)}><i className='fa fa-trash'></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </li> 
    )
  }
}

export default TodoItem