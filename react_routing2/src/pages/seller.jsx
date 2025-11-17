import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const SellerHomepage = () => {
  return (
    <nav>
        <ul>

            <NavLink to={"/"}>  <li>Myshop.com</li></NavLink>
            <NavLink to={"/seller"}>  <li>Home page</li></NavLink>
            <NavLink to={"addProducts"}>  <li>Add products</li></NavLink>
            <NavLink to={"deleteProduct"} ><li>delete products</li></NavLink>
            
        </ul>
        <Outlet/>
    </nav>
  )
}
