import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
         <ul>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <NavLink to={"/contact"}><li>Contact</li></NavLink>
        </ul>
    </div>
  )
}
