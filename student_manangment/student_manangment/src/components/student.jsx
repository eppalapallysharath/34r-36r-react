import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseurl } from "../App";

export const Student = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${baseurl}/student/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
   <div style={{ padding: "30px", textAlign: "center" }}>
  {student ? (
    <>
      <h3>Student Details</h3>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Location:</strong> {student.location}</p>
    </>
  ) : (
    <p>Fetching student data...</p>
  )}
</div>

  );
};
