import React from 'react'

export const GE3 = (props) => {
  return (
    <div>grand child 3
        {props.student.map(value => <p>{value.name} {value.age}</p>)}
    </div>
  )
}
