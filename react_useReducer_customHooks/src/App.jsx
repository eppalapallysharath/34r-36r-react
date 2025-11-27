import React from 'react'
import { Counter } from './counterApp/Counter'
import { RegistrationForm } from './forms/RegistrationForm'
import { Routes, Route } from 'react-router-dom'
import { ProductList } from './components/productList'
import { ProductDetails } from './components/ProductDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='*' element={<div><p className='h2'>Page not found</p></div>}/>
      </Routes>
      {/* <Counter/> */}
      {/* <RegistrationForm/> */}
    </>
  )
}
export default App