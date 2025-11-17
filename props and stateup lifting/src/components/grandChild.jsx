import { GE3 } from "./ge2"

export function GE1 (props){
        // console.log(props)

    return <div>Grand Child 1
            <h1>{props.count}</h1>
            <GE3 student={props.data}/>
    </div>
}