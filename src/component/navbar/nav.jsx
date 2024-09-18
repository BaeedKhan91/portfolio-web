import React,{useState}from 'react'
import { NavLink, } from 'react-router-dom'
import './nav.css'
function nav  ()  {
    const [navItems,setNavItems] =useState(false);
  return (
    <>
    <div className="nav-container mobile-link">
        <div className="one">
           <p>About me</p>
        </div>
        <div className="two"></div>
        <div className={navItems ? "mobile-link row-link" :"three nav-items"}>
        <div className=" home ho">
            <NavLink to="/">Home</NavLink>
            {/* <a href="">Home</a> */}
            </div>
        <div className=" service ho" >
            <NavLink to="/service">Service</NavLink>
        {/* <a href="">Service</a> */}
            </div>
        <div className=" education ho">
            <NavLink to="/eduaction">Education</NavLink>
        {/* <a href="">Education</a> */}
            </div>
        <div className=" about ho">
            <NavLink to="/contact">Contact</NavLink>
        {/* <a href="">About</a> */}
            </div>
        </div>
        <div className="nav-button" onClick={()=>setNavItems(!navItems)}>
             ☰
            </div>
    {/* <Outlet/> */}
    </div>
    {/*  */}
        {/* <div className="sepration"></div> */}
    </>
  )
}

export default nav 