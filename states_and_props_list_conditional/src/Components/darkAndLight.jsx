import { Component } from "react";
import lightIcon from "../assets/sun.png"
import darkIcon from "../assets/moon.png"
import "../App.css"
export class Theme extends Component {
    constructor(){
        super();
        this.state = {dark:false}
    }

    changeTheme = () =>{
        this.setState({dark:!this.state.dark})
    }

    render (){
        // return <div style={{ backgroundColor:this.state.dark ?  "black" : "white" , color: this.state.dark ?"white" :"black" }}>
        return <div >
            <button onClick={this.changeTheme}>{this.state.dark ? <img src={lightIcon}/> : <img src={darkIcon}/>}</button>
            <h1>hi hello</h1>
            <h2>{this.state.dark ? "your using dark theme": "your using light theme"}</h2>
        </div>
    }
}