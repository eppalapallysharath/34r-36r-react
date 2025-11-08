import {ExampleUseEffect} from "./components/useeffect"
import { UserPosts } from "./components/post"
import { useState } from "react"
import {ExampleUnmounting} from "./components/cleanup"
import { useEffect } from "react"

function App (){
  const [show, setShow] = useState(false)
  // const [count, setCount] = useState(1)

  // useEffect(()=>{
  //   setCount(++count)
  //   }, [])
  
  return<>
  {/* <p>count value {count}</p> */}

    <h2>APP component </h2>
    { show ? <button onClick={()=>setShow(!show)}>hide component </button> : <button onClick={()=>setShow(!show)}>show component</button>}

    { show ? <ExampleUnmounting/> : <></>}
  {/* <ExampleUseEffect/> */}
    {/* <UserPosts/> */}
  </>  
}

export default App