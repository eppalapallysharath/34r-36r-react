import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{
      background: "#1e90ff",
      padding: "12px",
      marginBottom: "20px"
    }}>
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "20px",
        margin: 0,
        padding: 0
      }}>
        <NavLink to={"/"} style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>
          <li style={{ cursor: "pointer" }}>Home</li>
        </NavLink>

        <NavLink to={"/students"} style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>
          <li style={{ cursor: "pointer" }}>All Students</li>
        </NavLink>

        <NavLink to={"/addStudent"} style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>
          <li style={{ cursor: "pointer" }}>Add Student</li>
        </NavLink>
      </ul>
    </div>
  )
}
