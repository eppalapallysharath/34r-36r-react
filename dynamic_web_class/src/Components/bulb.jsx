import { Component } from "react";
import bulbOffImg from "../assets/images/bulb off.jpeg"
import bulbOnImg from "../assets/images/bulb on.jpg"

// event binding type 1
export class Greetings extends Component{
    constructor(){
        super();
        this.state = {
            greetMsg : "hi hello how are you?"
        }
        this.handleGreet = this.handleMsg.bind(this)
        this.handleHi = this.sayHi.bind(this)
    }
    
    
    handleMsg(){
        console.log("click")
            this.setState({greetMsg:"bye see you later"})
    }

    sayHi(){
        this.setState({greetMsg:"hi hello how are you?"})
    }

    render(){
        return <div>
            <h1>{this.state.greetMsg}</h1>
            <button onClick={this.handleGreet}>say bye</button>
            <button onClick={this.handleHi} > say hi</button>
        </div>
    }
} 

// event binding type 2
export class Bulb extends Component{
    constructor (){
        super();
        this.state = { bulb: bulbOffImg}
    }
    lightChange(){
        this.setState({bulb: bulbOnImg})
    }

    lightoff(){
        this.setState({bulb:bulbOffImg})
    }

    render(){
        return <div> 
            <p>bulb </p>
            <img src={this.state.bulb} alt="bulb off" height={"100px"}/>
            <button style={{ margin:"5px" }} onClick={()=>this.lightChange()}>light on</button>
            <button onClick={()=>this.lightoff()}>light off</button>
        </div>
    }

}
// event binding type 3
export class ChangeColor extends Component{
    constructor(){
        super()
        this.state = {
            bg:"white",
            color:"black"
        }
    }
    handleDark = ()=>{
        this.setState({bg:"black", color:"white"})
    }
    handleLight = () =>{
        this.setState({bg:"white", color:"black"})
    }

    render(){
        return <div style={{ backgroundColor:this.state.bg }}>
            <h3 style={{ color:this.state.color }}>im light theme</h3>
            <button style={{ color:this.state.color  }} onClick={this.handleLight}>Light</button> 
            <button style={{ color:this.state.color }} onClick={this.handleDark}>dark</button> 
        </div>
    }
}

export class CounterApp extends Component {
    constructor(){
        super();
        this.state={count:0}
    }
    // msg= "hi"
    increment = () =>{
        this.setState({count: this.state.count+1})
        // this.msg ="bye"
        console.log(this.msg)
    }
    
    render(){
        return <div>Counter App
            <h3>Count value {this.state.count} </h3>
            {/* <h2>{this.msg}</h2> */}
            <button onClick={this.increment}>increment</button>
        </div>

    }
}





