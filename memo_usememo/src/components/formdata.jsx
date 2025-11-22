import React,{memo} from 'react'

const INFO = (props) => {
    console.log("forms rerender")
  return (
    <div>formdata
        <h1>submitted message {props.formData} </h1>
    </div>
  )
}

export const DataForms = memo(INFO)
