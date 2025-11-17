import React from 'react'
import { Navbar } from '../Components/Navbar'
import { LandingPage } from './LandingPage'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Homepage