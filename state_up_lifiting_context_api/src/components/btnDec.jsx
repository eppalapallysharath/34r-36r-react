import React from 'react'

export const CountDEC = ({dec}) => {
  return (
    <div>
        <button onClick={()=>dec(prev =>  prev - 1)}>-</button>
    </div>
  )
}
