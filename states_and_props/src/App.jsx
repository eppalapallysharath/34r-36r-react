import { Component } from "react";
import {RandomNumber} from "./Components/randomNumber"
import {InputComponent} from "./Components/userComp"
import {Card} from "./Components/props"
export class App extends Component {

  render(){
    return<>
      <p>App component</p>
      {/* <RandomNumber/> */}
      {/* <InputComponent/> */}
      <Card name="sharath" designation="SDE 1" employeeID={178451} skills={["java", "spring boot"]}/>
      <Card name="tom" designation="Devops 2" employeeID={177575}  skills={["javaScript", "node"]}/>
         <Card name="tom" designation="Devops 2" employeeID={177575}  skills={["python", "react"]}><div style={{ backgroundColor:"violet" }}>
          <p>hello world</p></div></Card>
    </>
  }
} 