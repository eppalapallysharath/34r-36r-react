import React, { useEffect, useState } from 'react'

export const WithoutChildNames = (props) => {
    const [data, setData] = useState([])
    
    const {namesArray} = props;
    
    useEffect(()=>{
        console.log("effect")
        setData(namesArray())
    },[namesArray])

  return (
    <div>
        <h4>Names</h4>
        <ol>
        {data.map((v,index) => <li key={index}>{v}</li> )}
        </ol>
    </div>
  )
}
