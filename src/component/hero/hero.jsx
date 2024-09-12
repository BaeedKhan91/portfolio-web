import React from 'react'
import MYpic from './../../assets/title.jpg'
import './hero.css'

function hero  ()  {
  return (
    <>
    <div className="hero-container">
        <div className="hero-one"></div>
    <div className="hero-two">
        <div className="hero-text">
            <p className="hello">Hello, Welcome</p>
        <h1>I am Baeed Khan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus repudiandae reiciendis provident autem nihil dicta fugit consequatur harum placeat itaque, maiores ipsum, eum corrupti, accusamus soluta beatae minus commodi.
        </p>
        <button>Contact us</button>
        </div>
        
        
    </div>
    <div className="hero-three">
        <img src={MYpic} alt="" />
    </div>
    </div>
    <div className="bachahoa"></div>
    </>
  )
}

export default hero