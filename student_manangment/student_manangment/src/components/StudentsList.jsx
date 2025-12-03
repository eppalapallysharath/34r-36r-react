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
    <div>
      <h4>Stuidents list</h4>
      {
        students.length > 0 ? students.map(item => <div key={item.sid} style={{border: "1px solid black"}}>
          <div  onClick={()=>navigate("/student/"+item.sid)}>
            <p>student name {item.name}</p>
          <p>student age {item.age}</p>
          <p>student locations {item.location}</p>
          </div>
          <div>
            <button onClick={()=>navigate("/editStudent/"+item.sid)}>Edit</button>
            <button onClick={()=>deleteStudent(item.sid)}>Delete</button>
          </div>
        </div>) : <h4>Loading...</h4>
      }
    </div>
  )
}
