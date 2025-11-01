import { Component } from "react";
import {Todo} from "./Components/Todo"

class App extends Component {
  render(){
    return <>
      <h3>Todo App </h3>
      <Todo/>
    </>
  }
}
export default App;