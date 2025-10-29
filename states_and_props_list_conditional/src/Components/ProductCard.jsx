import { Component } from "react";
import "./productsList.css"

export class Card extends Component {

    render(){
        console.log(this.props)
        return <div key={this.props.i} className="main-card-container">
            <img src={this.props.product.image} />
            <p>{this.props.product.title}</p>
            <h5>From ${this.props.product.price}</h5>
        </div>
    }
}