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
                <p>As a front-end web developer, I have expertise in HTML, CSS, JavaScript, and frameworks like React.js and Tailwind CSS. I'm currently expanding my backend knowledge at Suffah Education to build comprehensive web applications and stay updated with industry trends.
                <p style={{marginTop:'15px'}}>I completed my second year in Commerce, focusing on Accounts, at S.M. College. This academic foundation has enhanced my analytical skills and attention to detail, which I find valuable in my career.</p>

</p>
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