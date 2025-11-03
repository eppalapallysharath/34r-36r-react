import {Component } from "react";
import axios from "axios"

export class ShopOnline extends Component {
    constructor(){
        super()
        this.state = {products: [], count:0, category:"", filterProducts:[]}
    }


    // timer(){
    //     setInterval(()=>console.log("print every 2seconds"), 2000)
    // }
    // fetchProducts(){
    //     fetch("https://fakestoreapi.com/products")
    //     .then(res=> res.json())
    //     .then(data => this.setState({products: data}))
    //     .catch(err=>console.log(err))
    // }

    fetchProducts(){
        axios.get("https://fakestoreapi.com/products")
        .then(response=>this.setState({products:response.data, filterProducts:response.data }))
        .catch(err => console.log(err))
    }
    

    componentDidMount(){
        // this.timer()
        this.fetchProducts()

    }

    increment=()=>{
        this.setState({count:this.state.count + 1})
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.category !== this.state.category){
            const filtered = this.state.filterProducts.filter(item => item.category == this.state.category)
        this.setState({products: filtered})
        }
    }

    categories(value){
        this.setState({category: value})
    }

    render(){
        console.log("category", this.state.category, "products", this.state.products)
        return <div>
            <p>counter {this.state.count}</p>
            <button onClick={this.increment}>increment</button>
            <p>E commerce online</p>
            <div>
                <button onClick={()=>this.categories("men's clothing")}>Mens</button>
                <button onClick={()=>this.categories("electronics")}>Electronics</button>
                <button onClick={()=>this.categories("jewelery")}>Jewelry</button>
            </div>
            {this.state.products.length > 0 ? this.state.products.map((item, index)=> <div key={index}>
                <p>{item.title}</p>
            </div>) :<h4>Loading ....</h4>}
        </div>
    }
}