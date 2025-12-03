import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseurl } from '../App'

export const Student = () => {
  const [student, setStudent] = useState(null)
  const {id} = useParams()
  useEffect(()=>{
    axios.get(`${baseurl}/student/${id}`)
    .then(res =>setStudent(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <div>
      {student ? <> <h3>student deatils</h3>
      <p>student name {student.name}</p>
      <p>student age {student.age}</p>
      <p>student Location {student.location}</p> </>: <p>fetching stundent data</p> }
     
    </div>
  )
}
