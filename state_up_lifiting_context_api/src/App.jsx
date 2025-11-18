import React from 'react'
import { CountApp } from './components/countApp';
import { Todoapp } from './components/todoapp/todoapp';
import { CounterApp } from './components/contextapi/counterApp';

export const App = () => {
  return (
    <div>
      <p>App</p>
      {/* <CountApp/> */}
      {/* <Todoapp/> */}
      <CounterApp/>
    </div>
  )
}

export default App;