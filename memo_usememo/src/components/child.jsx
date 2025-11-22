import React from 'react'



const Child = (props) => {
    console.log("child rendered")
  return (
    <div>
        <p>name is {props.name ? "sharath" :"no name"}</p>
    </div>
  )
}


export const ChildMemo = React.memo(Child)
