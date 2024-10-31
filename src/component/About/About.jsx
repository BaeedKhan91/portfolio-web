import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/fiver.png'
import './About.css'
function About() {
  return (
    <div className='about'>
    <div className="about-title">
        <h1>About Me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aliquid iste natus aut eligendi! Animi deserunt repellendus veritatis adipisci ratione quibusdam nisi rerum voluptatem, fuga architecto exercitationem eius necessitatibus odit.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsam voluptas magnam dolores nam ab placeat, exercitationem quas? Aut sequi unde beatae numquam id odit magni non tenetur explicabo inventore.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{width:'70%'}}/></div>
                <div className="about-skill">
                <p>Javascript</p> <hr style={{width:'50%'}}/></div>
                <div className="about-skill">
                <p>React.js</p> <hr style={{width:'60%'}}/></div>
            
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default About