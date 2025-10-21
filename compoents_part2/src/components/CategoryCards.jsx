import React from "react";

class Category extends React.Component {
  categoryData = [
    {
      title: "WOMENS'S",
      imageurl: "https://coloshop-template.vercel.app/images/banner_1.jpg",
    },
    {
      title: "ACCESSORIES'S",
      imageurl: "https://coloshop-template.vercel.app/images/banner_2.jpg",
    },
    {
        title:"MENS'S",
        imageurl:"https://coloshop-template.vercel.app/images/banner_3.jpg"
    }
  ];
  render() {
    return <div style={{ display:"flex" }}>
        {this.categoryData.map((value, index )=> <div key={index} style={{ position:"relative" }} >
            <img src={value.imageurl} height="200px" />
            <p style={{ position:"absolute", zIndex: 1, top:"70px", left:"70px", backgroundColor:"white", fontWeight:"bolder", fontSize:"24px"}}>{value.title}</p>
        </div>)}
    </div>;
  }
}

export default Category;
