import React from "react";
import "./TopNavbar.css"

class TopNavbar extends React.Component {
  price = 50;

  render() {
    return (
      <nav
        style={{
          maxHeight: "50px",
          backgroundColor: "black",
          color: "#b5aec4",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <p>Free shipping on all u.s orders over ${this.price}</p>
        </div>
        <div className="topnav-sub-container2">
          <p>USD</p>
          <p style={{ border:"1px solid #b5aec4",margin:0, padding:"15px"  }}>English</p>
          <p>My Account</p>
        </div>
      </nav>
    );
  }
}

export default TopNavbar;
