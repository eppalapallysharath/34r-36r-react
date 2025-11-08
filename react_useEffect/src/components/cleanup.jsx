import { useEffect } from "react"
import axios from "axios"

export function ExampleUnmounting (){   
  const interval  = ()=>{
     const time = setInterval(()=>{console.log("hi hello world")}, 2000)
     return time
  }

  const fetchRecipes = (signal)=>{
    axios.get("https://dummyjson.com/recipes", {signal})
    .then(res=> console.log("axios",res))
    .catch(err => console.log(err))

    fetch("https://dummyjson.com/recipes", {signal})
    .then(res => console.log("fetch", res))
    // .then(data => console.log(data))
    .catch(err=> console.log(err))

  } 

  useEffect(()=>{
    const abortController =  new AbortController()
    const signal = abortController.signal
    // console.log(signal)
    fetchRecipes(signal)

    // const intervalId = interval()
    //here we written clean up function 
    return ()=>{
      // console.log(signal)
      // clearInterval(intervalId)
      // clearInterval(time)
      abortController.abort()
      console.log("clean up function")
    }
  }, [])

  return <div>
    <p>unmounting</p>
  </div>
}