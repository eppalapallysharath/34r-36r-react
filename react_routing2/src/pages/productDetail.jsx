import React, { useEffect, useState } from 'react'
import {  useParams, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'


export const ProductDetail = () => {
    const [data,setData] = useState({})
    const { id}= useParams()
    const navigate = useNavigate()
    console.log(useLocation())

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res =>{ setData(res.data)})
        .catch(err =>console.err)
    },[])

  return (
    <div>
        <button onClick={()=>{navigate(-1)}}>back button</button>
        <h2>Products  detailed description</h2>
        <p>{data.title}</p> 
        <p>{data.brand}</p>
        <img src={data.thumbnail} /> 
    </div>
  )
}
