import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../customHooks/fetchHook'
export const ProductDetails = () => {
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`
    const data  = useFetch(url)
  return (
    <div>
        <h2>ProductDetails</h2>
        <img src={data.image} width={"200px"}/>
        <p>{data.title}</p>
        <p>${data.price}</p>
        <p>category {data.category}</p>
    </div>
  )
}
