import { Component } from "react";
import {Greetings, Bulb, ChangeColor, CounterApp} from "./Components/bulb"
export class App extends Component{
  render(){
    return <>
    <p>APP</p>
    <Greetings/>
    <Bulb/>
    <ChangeColor/>
    <CounterApp/>
    </>
  }
}
