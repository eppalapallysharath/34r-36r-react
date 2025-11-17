import { useState } from "react"
import { Child1 } from "./components/child1"

function App(){
  const [data, setData] = useState([
    {name:"sharath", age:20},
    {name:"tom", age:21},
    {name:"jerry", age:22}
  ])
  const [count, setCount] = useState(0)


  const AddNewData = (value)=>{
    
    setData([...data, { name:value}])
  }

  function countInc(){
     setCount(count+1)
  }

  function countDec(){
    setCount(count - 1)
  }

  return<div>
    <h2>App components</h2>
    
    <Child1 studentData =  {data} increment={countInc} decrement={countDec} count={count}  addNew={AddNewData}/>
  </div>
}
export default App