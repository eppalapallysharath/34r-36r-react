import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export const Products = () => {
  const [productData, setProductsData] = useState([]);
  const navigate = useNavigate()
  const {state} = useLocation()
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProductsData(res.data.products), console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>Products</p>
      <p>username {state?.user}</p>
      {productData.length > 0 ? (
        productData.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid black", margin: "5px" }}
            onClick={()=>navigate(`/productsDetail/${item.id}`)}
          >
            <img src={item.thumbnail} width="200px" />
            <p>{item.title}</p>
          </div>
        ))
      ) : (
        <h5>Loading.....</h5>
      )}
    </div>
  );
};
