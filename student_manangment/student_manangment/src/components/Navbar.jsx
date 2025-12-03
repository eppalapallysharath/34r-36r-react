import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <NavLink to={"/"}> <li>Home</li></NavLink>
            <NavLink to={"/students"}><li>All students</li></NavLink>
            <NavLink to={"/addStudent"}><li>Add student</li></NavLink>
        </ul>
    </div>
  )
}
