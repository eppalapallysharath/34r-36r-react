import { Component } from "react";

export class InputComponent extends Component {
    constructor(){
        super();
        this.state = {input:"", data:"", name:"", city:""}
    }
    inputChange(event){
        console.log("changed")
        this.setState({input:event.target.value})
    }
    submit=()=>{
        const n = prompt("enter your name")
        this.setState({data:this.state.input, input:"", name:n})
    }

    selectCity(e){
        this.setState({city:e.target.value})
        
    }

    render (){
        return <div>
            <p>{this.state.data}</p>
            <p>{this.state.name}</p>
            <p>{this.state.city}</p>
            <input type="text" onChange={ (event)=>this.inputChange(event)}/>
            <button onClick={this.submit}>submit</button>
            <label>select your city</label>
            <select onChange={(e)=>this.selectCity(e)}>
                <option value="hyderabad">Hyderabad</option>
                <option value="mumbai">Mumbai</option>
                <option value="vizag">Vizag</option>
            </select>
        </div>
    }
}