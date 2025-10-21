import React from "react";
import HeaderComp from "./components/header/header";
import Footer from "./components/footer/Footer";
import Banner from "./components/section/Banner";
import ProductCard from "./components/ProductCards";
import Category from "./components/CategoryCards";
class App extends React.Component {
  render() {
    return (
    //   <>
    <React.Fragment>
        <HeaderComp />
        {/* <Banner /> */}
        <Category/>
        <Footer />
        {/* <ProductCard/> */}
    </React.Fragment>
    //  </>
    );
  }
}

export default App;
