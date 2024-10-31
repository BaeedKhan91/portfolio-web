import React from 'react'
import logo from '../../assets/main-logo.jpg'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        
       
        <img src={logo} alt="" width='109' height="57"  
            
    />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
        </div>
  )
}

export default Navbar

// https://www.youtube.com/watch?v=hkHHwA-vEyQ&list=WL&index=4