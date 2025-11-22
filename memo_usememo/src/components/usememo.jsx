import React, { useState, useMemo } from 'react'

export const ExampleUsememo = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState("") 

    function findSquare (){
        console.log("calculating")
        let value=0
        for(let i = 0; i<10000; i++){
            value = (number * number) + i
        }   
        
        return value
    }
    
    const memoNumber = useMemo(()=> findSquare(),[number])
    console.log("main component")
   

  return (
    <div>
        {console.log("hello")}
        <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
        <h4>count value {count}</h4>
        <input type='number' onChange={(e)=>setNumber(e.target.value)}/>
        <h4>{memoNumber}</h4>
    </div>
  )
}
