import React from 'react'
import { Products } from './components/Products';
import { DemoCards } from './demoCards';
import { ExampleBootstrap } from './components/bootstarp';
import {Alerts} from "./components/alerts"
import { GridExamples } from './components/grid';

const App = () => {
  return (
    <div>
      {/* <Alerts/> */}
      {/* <ExampleBootstrap/> */}
      <GridExamples/>
      {/* <Products/> */}
      {/* <DemoCards/> */}
    </div>
  )
}

export default App;