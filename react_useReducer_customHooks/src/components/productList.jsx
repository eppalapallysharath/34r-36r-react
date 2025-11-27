// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

import { useFetch } from "../customHooks/fetchHook"
import { useNavigate } from "react-router-dom"

export const ProductList = () => {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //     .then(res=>setData(res.data))
    //     .catch(err=>console.log(err))
    // },[])
    const navigate = useNavigate()
    const url = "https://fakestoreapi.com/products"
    const products = useFetch(url)

  return (
    <div>
        <h3>ProductList</h3>
        {products.map(value => <div key={value.id} onClick={()=>navigate(`/product/${value.id}`)}>
            <img src={value.image}  width={"150px"}/>
            <p>{value.title}</p>
            
        </div>)}
    </div>
  )
}
