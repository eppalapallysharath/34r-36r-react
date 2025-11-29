import React from 'react'

export const UserData = (prop) => {
  return (
    <div>{prop.productsData.map(item=> <div key={item.id}>{item.title}</div>)}</div>
  )
}
