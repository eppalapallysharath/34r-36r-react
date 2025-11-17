import { NavLink } from "react-router-dom"
export const Navbar = () =>{
    return <nav>
        <ul>
            <li> <NavLink to={"/"}>Myshop.com</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/products"}>Products</NavLink></li>
            <li><NavLink to={"/login"}>Login</NavLink></li>
            <li><NavLink to={"/seller"}>Become seller</NavLink></li>
        </ul>
    </nav>
}