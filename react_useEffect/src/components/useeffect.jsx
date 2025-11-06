import { useEffect, useState } from "react";
import axios from "axios";

export const ExampleUseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])  
  const [number, setNumber] = useState("even number")
  useEffect(
    ()=>{
        const title = document.getElementsByTagName("title")[0]
        title.textContent = "hello useEffect"
        const body = document.getElementById("root")
        const p = document.createElement("p")
        p.innerText = "hello world"
        body.appendChild(p)
    },[])

    useEffect(
        ()=>{
            axios.get("https://dummyjson.com/recipes")
            .then(res=> setData(res.data.recipes))
            .catch(err => console.log(err))
        },
        [count]
    )

    useEffect(
        ()=>{
            if(count%2 === 0){
                setNumber("even number")
            }else{
                setNumber("odd number")
            }
        },
        [count]
    )
    
 
  return (
    <div>
      {console.log("render")}
      <h3>Examples for useEffect hook</h3>
      <h1> Count {count} </h1>
      <p>{number}</p>
      <button onClick={() => setCount(count + 1)}>+</button>{" "}
      <button onClick={() => setCount(count - 1)}>-</button>
<div>
    {data.map(item=> <div key={item.id}>
        <img src={item.image} width="120px"/>
        <p>{item.name}</p>
    </div>)}
</div>
     
    </div>
  );
};
