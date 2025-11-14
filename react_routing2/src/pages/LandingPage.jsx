import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
    const navigate = useNavigate()

    const handleCard = ()=>{
        navigate("/product")
    }

  return (
    <div>LandingPage
        <div style={{ border:"1px solid green", background:"tomato", color:"gray" }}>
            <h1>Enjoy the flat 50%</h1>
            <button onClick={()=> navigate("/products")}>Start shopping now</button>
        </div>
        <div onClick={handleCard} style={{ border:"1px solid green",  backgroundColor:"yellowgreen", color:"mediumslateblue" }}>
            <h1>Enjoy the flat 30% on clothes</h1>
            <h4>shop winter ware</h4>
        </div>
    </div>
  )
}
