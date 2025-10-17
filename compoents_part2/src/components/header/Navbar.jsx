import React from "react";
import "./Navbar.css"
class Navbar extends React.Component{
    logoFirstName="COLO";
    logoLastName="SHOP"
    render(){
        return <nav className="nav-main-container">
            <div>
                <span style={{ color:"black" , fontWeight:"bolder" }}>{this.logoFirstName}</span>
                <span style={{ color:"red", fontWeight:"bolder" }}>{this.logoLastName}</span>
            </div>
            <div className="nav-sub-container2">
                <p>HOME</p>
                <p>SHOP</p>
                <p>PROMOTION</p>
                <p>PAGES</p>
                <p>BLOG</p>
                <p>CONTACT</p>
            </div>
        </nav>
    }
}

export default Navbar