import { useState } from "react"
import { GE1 } from "./grandChild"
export function Child1 (props){
    const [input, setInput] = useState("")
    const {increment, decrement, addNew} = props
    
    function inc(){
        return increment()
    }

    const dec = () =>{
        return decrement()
    }

    const Add  = () =>{
        return addNew(input)
    }

    return <div>
        Child component 1
        <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <button onClick={Add}>add new data</button>
        <GE1 data={props.studentData} count={props.count}/>
    </div>
}