import { Component } from "react";
import dummyData from "../assets/data/dummy.json"
import {Card} from "./ProductCard"
import "./Dummy.css"

export class DummyProduct extends Component{

    render(){
        return <div>
            <h3>Dummy products</h3>
            <div className="main-container-dummy">
                {dummyData.map((item, index)=> <Card product={item} i={index}/>)}
            </div>
        </div>
    }
}