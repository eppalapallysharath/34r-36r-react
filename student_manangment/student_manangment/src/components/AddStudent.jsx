import React, { useState } from "react";
import { baseurl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const naviagte = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "/student/add", {
        name: name,
        age: age,
        location: location,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("student added successfully");
          naviagte("/students");
        }
      })
      .catch((err) => {
        toast.error("something went wrong"), console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleRegister}
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#f8f9fa",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Student Registration Form</h3>

      <p>Enter student name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #aaa",
        }}
      />

      <p>Enter age</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #aaa",
        }}
      />

      <p>Enter location</p>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #aaa",
        }}
      />

      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
