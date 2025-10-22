import {Component}from "react";
import {Child1, Child2, a} from "./Components/Child"
import {Images} from "./Components/Images"
import {Style} from "./Components/Stylings"
class App extends Component{
    render(){
        return <>
            {/* <Images/> */}
            {/* <Child1/>
            <Child2/>
            <h1>num  {a}</h1> */}
            <Style/>
        </>
    }
}

export default App;


export const HelloWorld = ()=>{
    return <div>hello world component</div>
}
