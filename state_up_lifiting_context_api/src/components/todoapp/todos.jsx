import React from 'react'

export const Todos = (props) => {
    const {data} =props
  return (
    <div>
        {data.map(v => <li> {v.task}</li>)}
    </div>
  )
}
