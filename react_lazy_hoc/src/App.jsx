// import React, { useState,Suspense, lazy } from 'react'
// import { Route, Routes } from 'react-router-dom'
// const LazyChild = React.lazy(()=>import("./components/Child"))
// const Child2 = lazy(()=>import("./components/Child").then((module)=>({default:module.Child2})))
// const Demo= lazy(()=>import("./components/Demo").then((m)=>({default:m.Demo})))
// // import { Home } from './components/home'
// // import { Contact } from './components/contact'
// // import { Navbar } from './components/Navbar'

// const Navbar = lazy(()=>import("./components/Navbar").then((module=> ({default:module.Navbar}))))
// const Home = lazy(()=>import("./components/home").then(module=> ({default:module.Home})))
// const Contact = lazy(()=>import("./components/contact").then( module=> ({default:module.Contact})))


// const App = () => {
//   const [show, setShow] = useState(false)
//   return (
//     <>
//     <Navbar/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//     {/* <div> */}
//       {/* <h1>App</h1> */}
//       <button onClick={()=>setShow(true)}>show</button>
//       <button onClick={()=>setShow(false)}>hide</button>
//       {
//         show ?  <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww" Loading="lazy"/> : <></>
//       }
     
//       {/* <Suspense fallback={<h4>Loading....</h4>}> */}
//       {/* {show ?<> <LazyChild/> <Child2/> <Demo/> </>: <></>} */}
//       {/* </Suspense> */}
//     {/* </div> */}
//     </>
//   )
// }
// export default App;

// hoc example start from here
import React, { useEffect, useState } from 'react'
import { Loading } from './HOC/loadingHOC'
import { UserData } from './UserData'
import { Todos } from './todos'

const User = Loading(UserData)

const App = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  useEffect(()=>{
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
    .then((res=>res.json()))
    .then((data)=>{setData(data), setLoading(false)})
  },[])
  return (
    <div>
      <h3>App</h3>
      {/* <button onClick={()=>setLoading(!loading)}>{loading ? "load false" :"loading true"}</button> */}
      <Todos/>
      <hr/>
      {/* <User loading={loading} productsData={data}/> */}
    </div>
  )
}

export default App
