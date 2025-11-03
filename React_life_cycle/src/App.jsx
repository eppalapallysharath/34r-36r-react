import { Component } from "react";
import {ShopOnline} from "./lifecycle"

class App extends Component {
constructor(){
  super()
}  
render(){
    return<div>
      <h1>React life cycle methods</h1>
      <ShopOnline/>
    </div>
  }
}

export default App;