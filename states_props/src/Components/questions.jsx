import { Component } from "react";

export class Questions extends Component {
    constructor(){
        super();
        this.state={answer:""}
        this.handleShowAns = this.showAns.bind(this)
    }

    showAns(){
        this.setState({answer:"React is js library that is used build rich user interface with spa."})
    }

    render(){
        return <div>
            <h5>Questions component</h5>
            <p>what is react.js?</p>
            <p>ans:{this.state.answer}</p>
            <button onClick={this.handleShowAns} >answer</button>
        </div>
    }
}