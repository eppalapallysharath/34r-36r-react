import React, { useState } from 'react'
import { TodoInput } from './todoinput'
import { Todos } from './todos'

export const Todoapp = () => {
    const [todos, setTodos] = useState([
        {
            task:"hello world programs",
            completed:false
        }
    ]) 

  return (
    <div>
        <h1>Todo App</h1>
        <TodoInput setTodos= {setTodos}/>
        <Todos data = {todos}/>
    </div>
  )
}
