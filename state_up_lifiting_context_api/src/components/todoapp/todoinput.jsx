import React, { useState } from 'react'

export const TodoInput = (prop) => {
    
    const [input, setInput] = useState("")
    const {setTodos} = prop
    const handleClick = () =>{
        setTodos((todos=> [...todos, {task:input, completed: false}]))
    }
  return (
    <div>
        <input type='text' name='todo' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleClick}>Add todo</button>
    </div>
  )
}
