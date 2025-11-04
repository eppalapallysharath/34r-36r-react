import { Component } from "react";
import {ShopOnline} from "./lifecycle"
import {UserCards} from "./unmounting"

class App extends Component {
  constructor(){
    super()
    this.state = {visible: false}
  }  

  toggle = () =>{
    this.setState({visible:!this.state.visible})
  }

render(){
    return<div>
      <h1>React life cycle methods</h1>
      <button onClick={()=>this.toggle()}>{this.state.visible ? "hide" : "show"}</button>
      {this.state.visible === true ? <UserCards/> : <></>}
      {/* <ShopOnline/> */}
    </div>
  }
}

export default App;