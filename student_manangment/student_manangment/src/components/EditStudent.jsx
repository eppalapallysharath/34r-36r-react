import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseurl } from "../App";
import { toast } from "react-toastify";

export const EditStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const { id } = useParams();
  const naviagte = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseurl}/student/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setAge(res.data.age);
          setLocation(res.data.location);
          setName(res.data.name);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const savestudent = (e) => {
    e.preventDefault();
    axios
      .put(baseurl + `/student/${id}`, {
        name: name,
        age: age,
        location: location,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("student details updated succesfully");
          naviagte("/students");
        }
      })
      .catch((err) => {
        toast.error("something went wrong"), console.log(err);
      });
  };

  return (
    <form
      onSubmit={savestudent}
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#f8f9fa",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Edit Student Details</h3>

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
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};
