import React from "react";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar"

class HeaderComp extends React.Component {
  render() {
    return (
      <header>
        <TopNavbar />
        <Navbar/>
      </header>
    );
  }
}

export default HeaderComp;
