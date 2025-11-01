import { Component } from "react";

export class Todo extends Component {
    constructor(){
        super();
        this.state = {todoInput: "", todos:[], isEdit:false, updateIndex:null}
    }

    handleInput = (e) =>{
       this.setState({todoInput:e.target.value})
    }

    handleAddTodo = () => {
        const newtodo = [...this.state.todos,this.state.todoInput ]
        this.setState({todos: newtodo,todoInput:"" })
    }

    handleDelete = (index) =>{
        const deletedTodo = this.state.todos.filter((ele, i)=> i !== index)
        this.setState({todos:deletedTodo})
    }

    handleEdit = (index) => {
        const findTodoById = this.state.todos.find((ele, i)=> i == index ) 
        this.setState({todoInput:findTodoById, isEdit:true, updateIndex:index})

    }
    handleUpdate = () => {
        this.state.todos.splice(this.state.updateIndex, 1, this.state.todoInput)
        this.setState({todoInput:"", todos:this.state.todos, isEdit:false, updateIndex:null})
    }

  render() {
    return (
      <div>
        <div> 
            <input type="text" onChange={(e)=>this.handleInput(e)} placeholder="enter some todo tasks" value={this.state.todoInput} /> 
            {this.state.isEdit === true ? <button onClick={()=>this.handleUpdate()}> Update </button> : <button onClick={()=>this.handleAddTodo()}>Add</button>}
          
        </div>
        <div>
           {this.state.todos.map((ele, index)=> <div key={index}>
            <p>{ele}</p>
            <button onClick={()=>this.handleEdit(index)}>Edit</button>
            <button onClick={()=>this.handleDelete(index)}>Delete</button>
           </div>)}
        </div>
      </div>
    );
  }
}
