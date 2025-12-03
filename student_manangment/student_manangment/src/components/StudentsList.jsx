import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseurl } from '../App'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const StudentsList = () => {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()
  const getALlStudents = () =>{
    axios.get(baseurl+"/student")
    .then(res=>setStudents(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getALlStudents()
  },[])

  const deleteStudent = (id)=>{
    axios.delete(baseurl+`/student/${id}`)
    .then(res=>{if(res.status === 200 ){
      toast.success(res.data)
      getALlStudents()
    }})
    .catch(err=> {toast.error("something went wrong"), console.log(err)})
  }

  return (
   <div style={{ padding: "20px" }}>
  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Students List</h2>

  {students.length > 0 ? (
    students.map(item => (
      <div 
        key={item.sid}
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          margin: "10px auto",
          width: "500px",
          borderRadius: "10px",
          background: "#ffffff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        <div 
          onClick={() => navigate("/student/" + item.sid)}
          style={{ cursor: "pointer" }}
        >
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Age:</strong> {item.age}</p>
          <p><strong>Location:</strong> {item.location}</p>
        </div>

        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button 
            onClick={() => navigate("/editStudent/" + item.sid)}
            style={{
              padding: "8px 15px",
              background: "#ffc107",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Edit
          </button>

          <button 
            onClick={() => deleteStudent(item.sid)}
            style={{
              padding: "8px 15px",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  ) : (
    <h4 style={{ textAlign: "center" }}>Loading...</h4>
  )}
</div>

  )
}
