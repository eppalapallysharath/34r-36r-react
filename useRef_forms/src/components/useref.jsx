import {useRef, useState, useEffect} from "react"

export function Example_useRef(){
    const [count, setCount] = useState(1)
    const [form , setForm] = useState("")
    const ref = useRef(1)
    const pRef = useRef("") 
    const inputRef = useRef("hi")
    // const inc = () =>{
    //    ref.current = ref.current + 1
    //    console.log("inc")
    //    console.log(ref)
    // }
    // const dec = () =>{
    //     ref.current = ref.current - 1
    //     console.log('dec')
    //     console.log(ref)
    // }
    const stylechange = () =>{
        console.log("change")
        // console.log(pRef.current.style.co)
        // pRef.current="bye"
        pRef.current.innerHTML = "<span style='color:red'>hello</span> <h1>wonder land</h1>"
    }

    useEffect(()=>{
        inputRef.current.focus()
        // inputRef.current.value="enter something"
    }, [])

    const submit = () =>{
        setForm(inputRef.current.value)
        inputRef.current.value = ""
    }

    console.log("rerendered")
    return <div>
        <p>example of useRef</p> 
        <p>useState count {count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={() => setCount(count -1)}>-</button>

        {/* <p>useRef Count {ref.current}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button> */}

        <h2 ref={pRef}>hi hello</h2>
        <button onClick={stylechange}>changes color</button>
        <div>
        <input type="text" ref={inputRef}/>
        <button onClick={()=>submit()}>print</button>
        <p>{form}</p>
        </div>
    </div>
}