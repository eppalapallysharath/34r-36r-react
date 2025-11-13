import {Routes, Route} from "react-router-dom"
import {HomePage} from "./pages/homepage"
import { ContactUs } from "./pages/contactus"
import { PageNotFound } from "./pages/pagenotfound"
import {Navbar} from "./components/Navbar"
import {About} from "./pages/about"
import {Service} from "./pages/service"

function App (){
  return <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/contactus" element = {<ContactUs/>}/>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
    </Routes>
  </>
}

export default App