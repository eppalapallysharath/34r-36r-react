import React from 'react'

export const TodoData = (prop) => {
  return (
    <div>
      {prop.data.map(val => <h3>id{val.id} todo{val.title}</h3>)}
    </div>
  )
}
