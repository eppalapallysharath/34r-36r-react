import {Example_useRef} from "./components/useref"
import {Register} from "./components/forms"
import {UserForm, Uncontrolled} from "./components/userforms"
// import {Example_formvalidations} from "./components/validations"
import {Example_Controlled_component} from "./components/validations"
function App (){
  return <div>
    <h3>App components</h3>
    {/* <Example_useRef/> */}
    {/* <Register/> */}
    {/* <UserForm/> */}
    {/* <Uncontrolled/> */}
    {/* <Example_formvalidations /> */}
    <Example_Controlled_component/>
  </div>
}

export default App