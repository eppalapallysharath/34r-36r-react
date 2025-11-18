import React, { useContext } from 'react'
import { CountContext } from './counterApp'

export const GrandChild = () => {
    const {count} =useContext(CountContext)
  return (
    <div> {count} </div>
  )
}
