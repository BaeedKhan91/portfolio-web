import React from 'react'
import profile_img from './../../assets/fiver.png'
import './Hero.css'


function Hero() {
  return (
    <div className='hero'>
    <img src={profile_img} alt="" width="250" height="280" style={{
        borderRadius:'45%'
    }} />
    <h1> <span> Hi I'am Baeed Khan,</span> Frontend Developer based in Pakistan.</h1>
    <p>I’m a Front-End Developer learning Back-End Development. I create responsive, user-friendly web designs and am passionate about building full-stack solutions that bring ideas to life. </p>
   <div className="hero-action">
    <div className="hero-connect">Connect With Me</div>
    <div className="hero-resume">My Resume</div>
   </div>
   
    </div>
  )
}

export default Hero