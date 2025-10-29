import { Component } from "react";
import "./ProductsList.css";
import { Card } from "./ProductCard";
// import data from "../assets/data/productsData.json";

export class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <div className="main-container">
          {this.props.data.map((item, index) => (
            <Card product={item} i={index} />
          ))}
        </div>
      </div>
    );
  }
}
