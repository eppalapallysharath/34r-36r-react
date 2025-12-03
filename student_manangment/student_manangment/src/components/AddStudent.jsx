import React, { useState } from 'react'
import { baseurl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export const AddStudent = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [location, setLocation] = useState("")

  const naviagte = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post(baseurl + "/student/add", {
      name: name,
      age: age,
      location: location
    })
      .then(res => {
        if (res.status === 200) {
          toast.success("student added successfully")
          naviagte("/students")
        }
      })
      .catch(err => {toast.error("something went wrong"), console.log(err)})

  }

  return (
    <form onSubmit={handleRegister}>
      <h3>Student registation form</h3>
      <p>Enter student name</p>
      <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Enter age</p>
      <input type='number' name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      <p>Enter location</p>
      <input type='text' name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <div>
        <button >Submit</button>
      </div>
    </form>
  )
}

