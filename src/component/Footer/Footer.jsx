import React from 'react'
import logo from '../../assets/main-logo.jpg'
import user_icon from '../../assets/user_icon.svg'

import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt=""  width='109' height="57" style={{
                marginBottom: '20px',
            }}/>
            <p>I’m a Front-End Developer from Karachi, learning Backend development at suffah education </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2024 Baeed Khan. All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term Of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
            
        </div>
    </div>
    
    </div>
  )
}

export default Footer