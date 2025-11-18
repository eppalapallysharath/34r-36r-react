import React, { useState } from 'react'
import { Count } from './count'
import { CountINC } from './btnInc'
import { CountDEC } from './btnDec'

export const CountApp = () => {
    const [count, setCount] = useState(1)
    console.log("rendering parent")
  return (
    <div>
        <h4>Count app</h4>
        <CountINC inc={setCount} count={count}/>
        <Count count = {count}/>
        <CountDEC dec = {setCount} />   
    </div>
  )
}

