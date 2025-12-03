import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { StudentsList } from './components/StudentsList'
import { AddStudent } from './components/AddStudent'
import { EditStudent } from './components/EditStudent'
import { Student } from './components/student'
import { Navbar } from './components/Navbar'
import { ToastContainer } from 'react-toastify'
export const baseurl = "http://localhost:8080"
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<StudentsList/>}/>
      <Route path='/student/:id' element={<Student/>} />
      <Route path='/addStudent' element={<AddStudent/>}/>
      <Route path='/editStudent/:id' element={<EditStudent/>}/>
      <Route path='*' element ={<h2>Page not found</h2>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
