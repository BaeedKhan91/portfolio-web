import React ,{ useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Services from './component/Services/Services'
import Mywork from './component/Mywork/Mywork'
import Contact from './component/contact/Contact'
import Footer from './component/Footer/Footer'
function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
