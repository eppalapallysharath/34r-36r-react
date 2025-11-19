import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/login")
    }

  return (
    <div>
        <p>Landing page</p>
        <button onClick={handleClick}>Get started</button>
    </div>
  )
}
