import React,{useContext} from 'react'
import {CountContext} from "./counterApp"

export const Countbuttons = () => {
    const {setCount} =useContext(CountContext)
  return (
    <div>
        <button onClick={()=>setCount((prev) => prev +1)}>+</button>
        <button onClick={()=>setCount(prev => prev - 1)}>-</button>
    </div>
  )
}
