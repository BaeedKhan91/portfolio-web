import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/fiver.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Import down arrow icon
import './About.css';

function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me 
                    <hr style={{
                        height: '10px',
                        width: '50%',
                        background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
                        border: 'none',
                        borderRadius: '10px'
                    }}/>
                </h1>
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            As a front-end web developer, I have expertise in HTML, CSS, JavaScript, and frameworks like React.js and Tailwind CSS. I'm currently expanding my backend knowledge at Suffah Education to build comprehensive web applications and stay updated with industry trends.
                            <p style={{ marginTop: '15px' }}>
                                I completed my second year in Commerce, focusing on Accounts, at S.M. College. This academic foundation has enhanced my analytical skills and attention to detail, which I find valuable in my career.
                            </p>
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: '70%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p> <hr style={{ width: '50%' }} />
                        </div>
                        <div className="about-skill">
                            <p>React.js</p> <hr style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <AnchorLink className='anchor-up' href='#home'> <div className="arrows up-arrow">
                <FontAwesomeIcon icon={faArrowUp} size="lg" />
            </div></AnchorLink>        
           <AnchorLink href='#services'>
            <div className="arrows down-arrow">
                <FontAwesomeIcon icon={faArrowDown} size="lg" />
            </div>
            </AnchorLink>
        </div>
    );
}

export default About;
