import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
function nav  ()  {
  return (
    <>
    <div className="nav-container">
        <div className="one">
           <p>About me</p>
        </div>
        <div className="two"></div>
        <div className="three">
        <div className="nav-items home">
            <a href="">Home</a>
            </div>
        <div className="nav-items service" >
        <a href="">Service</a>
            </div>
        <div className="nav-items education">
        <a href="">Education</a>
            </div>
        <div className="nav-items about">
        <a href="">About</a>
            </div>
        </div>
    </div>
        {/* <div className="sepration"></div> */}
    </>
  )
}

export default nav 