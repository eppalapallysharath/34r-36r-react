import React from "react";
import HeaderComp from "./components/header/header";
import Footer from "./components/footer/Footer";
import Banner from "./components/section/Banner";

class App extends React.Component {
  render() {
    return (
    //   <>
    <React.Fragment>
        <HeaderComp />
        <Banner />
        <Footer />
    </React.Fragment>
    //  </>
    );
  }
}

export default App;
