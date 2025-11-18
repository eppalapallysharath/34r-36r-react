import React, { useState, createContext } from 'react'
import { Countvalue } from './countvalue'
import { Countbuttons } from './countbuttons'

export const CountContext = createContext()

export const CounterApp = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
       <h3> counterApp</h3>
       <CountContext.Provider value={{count, setCount}}>
            <Countvalue />
            <Countbuttons/>
        </CountContext.Provider>
    </div>
  )
}

