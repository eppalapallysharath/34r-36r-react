import React from 'react'
import {CounterApp} from "./components/counterApp"
import {ExampleUsememo} from "./components/usememo"
import { SeatBooking } from './components/booking'

const App = () => {
  return (<>
    <h4>App</h4>
    <SeatBooking/>
    {/* <ExampleUsememo/> */}
    {/* <CounterApp/> */}
  </>)
}

export default App