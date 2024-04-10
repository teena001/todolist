import React, { Component } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css'; 
import TodoLists from './components/todoList/TodoLists';
import TodoForm from './components/todoList/TodoForm';
import EditTodoItem from './components/todoList/EditTodoItem';
//import uuid from "uuid"

export class App extends Component {
  state = { 
    data: [],
    loading: false,
    value: "",
    editing: false,
    currentid: "",
    currentValue: ""
    
  }

  
  fetchData = async () => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
      const userData  = await resp.json();
      this.setState({
        data: userData,
        loading: true
    });


    } catch (error) {
      console.log("error fetching data" ,error)
    }
  }

  
  componentDidMount(){
    this.fetchData() 
  }
  

  onChange =(e)=>{
    this.setState({
      value:e.target.value
    })
  } 
  

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title : this.state.value,
      id: Date.now()
    }

    if(this.state.value !== "") {
      this.setState({
        data: this.state.data.concat(newTask)
      });
      this.setState({value:""})

    }
  }

  
  clearList =() =>{
    this.setState({
      data:[]
    })
  }

  onDelete = (taskId) => {
    const deletedItem = this.state.data.filter(task => task.id !== taskId)
    this.setState({
      data:deletedItem
    })

  }

  onEdit =(todoItem) =>{
    
    this.setState({ editing: true })
    this.setState({ currentid: todoItem.id })
    this.setState({ currentValue: todoItem.title }) 
    }

    
  onEditChange = (e) => {
    this.setState({
      currentValue: e.target.value
    })
  }
  onEditSubmit = (e) => {
    
    e.preventDefault();
    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({editing:false})
  }

  onEditTodo = (id, newValue) => {
    this.state.data.map(todo => {
      if(todo.id === id) {
        todo.title = newValue
      }
    })
  }

 
  render() {
    const {data, loading, editing} = this.state;

    if (!loading)
            return (
                <div>
                    <h1> Please wait some time.... </h1>
                </div>
            );

    return (
      <div className='container'> 
          {this.state.editing === false ?

          (
            <TodoForm 
              value={this.state.value}
              handleSubmit ={this.handleSubmit} 
              onChange={this.onChange}
            />

          )
          :
          <EditTodoItem 
            value={this.state.currentValue} 
            onEditChange={this.onEditChange} 
            onEditSubmit={this.onEditSubmit}
          />

          }
        

        <TodoLists 
          data={data} 
          clearList={this.clearList} 
          onDelete={this.onDelete} 
          onEdit={this.onEdit} 
          editing={editing}
        />

      </div>
    )
  }
}

export default App