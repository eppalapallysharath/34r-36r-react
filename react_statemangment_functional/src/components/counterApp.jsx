import {useState} from "react"

export function Counter (){
    const [count, setCount]  = useState(0)
    const [message, setMessage] = useState("hi how are you")
    const [ name, setName ] = useState("")
    const [input, setInput] = useState("")
    const [themeDark, setThemeDark] = useState(false)

    function decrement(){
        setCount(count-1)
    }

    const handleName = (inputName) =>{
        if(inputName.length > 0){
            setName(inputName)
        }else{
            alert("provide name")
        }
    }

    const handleChange = function (e){
        setInput(e.target.value)
    }

    const toggleTheme = () =>{
        setThemeDark(!themeDark)
    }

    return <div style={{ background: themeDark ? "black" : "white", color: themeDark ? "white" :"black" }}>
        <h3>Counter app</h3>
        {/* inline event binding */}
       <button onClick={()=>setCount(count+1)}>+</button>
       <span>count number {count}</span>
       {/* external event binding */}
       <button onClick={decrement}>-</button>

       <h1>{message}</h1>
       <button onClick={()=>{setMessage("bye see you later"), console.log("hi")}}>say bye</button>
        <h2>{name}</h2>
        <button onClick={()=>handleName("sharath")}>show name</button>
        <button onClick={()=>handleName("")}>show name</button>
        <input type="text" onChange={()=>handleChange(event)} placeholder="enter something"/>
        <p>{input.length > 0 ? input : "please type something in input box"}</p>
        { themeDark ===true ?  <button onClick={()=>toggleTheme()}>light</button> : <button onClick={()=>toggleTheme()}>Dark</button>}
    </div>
}