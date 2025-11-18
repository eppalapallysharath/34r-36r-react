import React,{useContext} from 'react'
import {CountContext} from "./counterApp"
import { GrandChild } from './grandChild'

export const Countvalue = () => {
    const {count} =useContext(CountContext)
  return (
    <div>
        <h2>here Count  value updates</h2>
        <GrandChild/>
    </div>
  )
}
