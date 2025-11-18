import React from 'react'

export const CountINC = (props) => {
    const {inc, count} = props
  return (
    <div>
        <button onClick={()=>inc(count + 1)}>+</button>
    </div>
  )
}
