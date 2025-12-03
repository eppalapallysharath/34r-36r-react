import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { baseurl } from '../App'
import { toast } from 'react-toastify'

export const EditStudent = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [location, setLocation] = useState("")

  const {id} = useParams()
  const naviagte = useNavigate()

  useEffect(()=>{
    axios.get(`${baseurl}/student/${id}`)
    .then(res =>{if(res.status===200){
      setAge(res.data.age)
      setLocation(res.data.location)
      setName(res.data.name)
    }})
    .catch(err => console.log(err))
  },[])

  const savestudent = (e) =>{
    e.preventDefault()
    axios.put(baseurl+`/student/${id}`,{
      name:name,
      age:age,
      location:location
    })
    .then(res=>{if(res.status ===200){
      toast.success("student details updated succesfully")
      naviagte("/students")
    }})
    .catch(err =>{ toast.error("something went wrong"), console.log(err)})
  }

  return (
    <form onSubmit={savestudent}>
      <h3>Student registation form</h3>
      <p>Enter student name</p>
      <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Enter age</p>
      <input type='number' name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      <p>Enter location</p>
      <input type='text' name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <div>
        <button>save</button>
      </div>
    </form>
  )
}
