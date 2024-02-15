import React, { Component } from 'react'
import TodoLists from './components/TodoLists'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import './App.css';
//import uuid from "uuid"

export class App extends Component {
  state = {
    todoLists : [],
    id:1,
    task:"",
    taskEdited: false
  }

  onChange =(e)=>{
    this.setState({
      task:e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.task.length){
      return;
    }


    const newItem= {
      id:this.state.id,
      task: this.state.task
    }

    //console.log(newItem)
    const updatedItems = [...this.state.todoLists, newItem]

    this.setState({
      todoLists:updatedItems,
      task:"",
      id:this.state.id+1,
      taskEdited:false
    });

  }

  clearList =() =>{
    this.setState({
      todoLists:[],
      task:"",
      taskEdited:false
    })
  }

  onDelete = (taskId) => {
    const deletedItem = this.state.todoLists.filter(task => task.id !== taskId)
    this.setState({
      todoLists:deletedItem, 
      id:this.state.id 
    })

  }

  onEdit =(taskId) =>{
    
    const filteredItems = this.state.todoLists.filter(task => task.id !== taskId);

    const selectedItem = this.state.todoLists.find(task => task.id === taskId);

    this.setState({
      todoLists:filteredItems,
      task:selectedItem.task,
      taskEdited: true,
      id:taskId
    }); 
  }
 
  render() {
    

    return (
      <div className='container'>
        <TodoInput 
        onSubmit = {this.onSubmit}
        onChange={this.onChange} 
        task={this.state.task}
        taskEdited={this.state.taskEdited}
        />
        <TodoLists 
        todoLists={this.state.todoLists} 
        clearList={this.clearList} 
        onDelete={this.onDelete} 
        onEdit = {this.onEdit}
        
        /> 

      </div>
    )
  }
}

export default App