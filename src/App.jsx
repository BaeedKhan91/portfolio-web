import React ,{ useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './component/navbar/nav'
import Eduaction from './pages/eduaction'
import Home from './pages/home'
import Contact from './pages/contact'
import Service from './pages/service'
import './App.css'
function App() {


  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/eduaction" element={<Eduaction/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/service" element={<Service/>} />
      
    </Routes>
    
    </BrowserRouter>
{/* <Home/> */}
    </>
  )
}

export default App
