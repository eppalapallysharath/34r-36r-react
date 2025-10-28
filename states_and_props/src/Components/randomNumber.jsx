import { Component } from "react";

export class RandomNumber extends Component{
    constructor(){
        super();
        this.state={random:0}
    }

    generateNumber = () =>{
        this.setState({random:Math.random()*100})
    }


    render(){
        return <div>
            <p>random number {this.state.random} </p>
            <button onClick={this.generateNumber}>generate random number</button>
        </div>
    }
}