import React from 'react'
import profile_img from './../../assets/fiver.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'


function Hero() {
  return (
    <div id='home' className='hero'>
        <div className="circle-frame"><img src={profile_img} alt="" className='circle-image' />
        </div>
    <h1> <span> Hi I'am Baeed Khan,</span> Frontend Developer based in Pakistan.</h1>
    <p>I’m a Front-End Developer learning Back-End Development. I create responsive, user-friendly web designs and am passionate about building full-stack solutions that bring ideas to life. </p>
   <div className="hero-action">
   <AnchorLink className='anchore-link' offset={50} href='#contact'><div className="hero-connect">  Connect With Me </div> </AnchorLink>
    <div className="hero-resume">My Resume</div>
   </div>
   
    </div>
  )
}

export default Hero