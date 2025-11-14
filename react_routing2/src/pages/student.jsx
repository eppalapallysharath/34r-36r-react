import React from 'react'
import { useParams } from 'react-router-dom'

export const Student = () => {
    const {rollno, classroom} =useParams()
  return (
    <div>Student
        <p>{rollno} {classroom}</p>
    </div>

  )
}
