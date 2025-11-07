import {useEffect} from "react"

export function ExampleUnmounting (){

    function TimeInterval(time){
        time = setInterval(()=> { console.log("hello")}, 3000)
    }

    useEffect(
        ()=>{
            let time;
            TimeInterval(time)
            return ()=>{
                console.log("cleanup function")
                return clearInterval(time)
            }
        }, []
    )
    console.log("test")
    return <div>
        <h1>Unmounting</h1>
    </div>
}