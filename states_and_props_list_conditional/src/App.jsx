import { Component } from "react";
// import {RandomNumber} from "./Components/randomNumber"
// import {InputComponent} from "./Components/userComp"
// import {Card} from "./Components/props"
import {ProductList} from "./Components/ProductsList"
import {DummyProduct} from "./Components/Dummy"
// import dummyData from "./assets/data/dummy.json"
// import productData from "./assets/data/productsData.json"
import {Cars} from "./Components/conditionalRender"
export class App extends Component {

  render(){
    return<>
      <p>App component</p>
      <Cars/>
      {/* <ProductList heading="products"  data={productData}/> */}
      {/* <ProductList heading="dummy"  data={dummyData}/> */}
      {/* <DummyProduct/> */}
      {/* <RandomNumber/> */}
      {/* <InputComponent/> */}
      {/* <Card name="sharath" designation="SDE 1" employeeID={178451} skills={["java", "spring boot"]}/>
      <Card name="tom" designation="Devops 2" employeeID={177575}  skills={["javaScript", "node"]}/>
         <Card name="tom" designation="Devops 2" employeeID={177575}  skills={["python", "react"]}><div style={{ backgroundColor:"violet" }}>
          <p>hello world</p></div></Card> */}
    </>
  }
} 