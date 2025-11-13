import "./navbar.css"
import {NavLink} from "react-router-dom"

export const Navbar = ()=>{

    return <nav>
        <ul className="nav-container">
            <li className="nav-items"> <NavLink to="/home" className='item' >Home</NavLink> </li>
            <li className="nav-items"> <NavLink to={"/contactus"} className='item'> Contacts</NavLink></li>
            <li className="nav-items"><NavLink to={"/about"} className='item'> About </NavLink> </li>
            <li className="nav-items"><NavLink to={"/service"} className='item'>Service</NavLink> </li>
        </ul>
    </nav>
}