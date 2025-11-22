import React, { useState } from 'react'
import { ChildMemo } from './child'
import { DataForms } from './formdata'

export const CounterApp = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(false)
    const [text, setText] = useState("")
    const [data, setData] = useState()
    console.log("parent rendered")
    const submit  = ()=>{
        setData(text)
    }
  return (
    <div>
        <h3>counterApp</h3>
        <h1>Count {count}</h1>
        <button onClick={()=>setName(!name)}>change name</button>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={submit}>submit text</button>
        <ChildMemo  name={name}/>
        <DataForms formData={data}/>
        <button onClick={()=>setCount(count+1)}>inc</button>
    </div>
  )
}
