import { Component } from "react";

export class Card extends Component {
  
    render(){
          console.log(this.props)
        return <div style={{ border:"1px solid red", width:"25rem" }}>
            <p>student Card</p>
            <p>name:{this.props.name}</p>
            <p>employee id:{this.props.employeeID}</p>
            <p>designation: {this.props.designation}</p>
            <h6>{this.props.skills.map((ele, index)=><ul key={index}><li>{ele}</li></ul>)}</h6>
            {this.props.children}
        </div>
    }
} 