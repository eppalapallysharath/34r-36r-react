import {ExampleUseEffect} from "./components/useeffect"
import { UserPosts } from "./components/post"
import {ExampleUnmounting} from "./components/cleanup"
import { useState } from "react"

function App (){
  const [toggle, setToggle] = useState(false)
  return<>
    <h2>APP component </h2>
    <button onClick={()=>setToggle(!toggle)}>{toggle ? "hide": "show"}</button>
     {toggle && <ExampleUnmounting/>}
    {/* <ExampleUseEffect/> */}
    {/* <UserPosts/> */}
  </>  
}

export default App