import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import './Contact.css'
function Contact() {
  return (
    <div id='contact' className='contact'>
    <div className="contact-title">
        <h1>Get In Touch <hr style={{
            height:'10px',
            width:'50%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/></h1>
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                     <img src={call_icon} alt=""  /> <p>+923162364385</p>
                </div>
                <div className="contact-detail">
                     <img src={mail_icon} alt="" /> <p>baeedk7@gmail.com</p>
                </div>
                <div className="contact-detail">
                     <img src={location_icon} alt="" />
                     <p>Baldia, Karachi, Pakistan</p>
                </div>
            </div>
        </div>
        <form  className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Namre' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email"  placeholder='Enter Your Email' name='email'/>  
            <label htmlFor=""> Write Yor Message Here</label>
            <textarea name="message" rows='8' placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'> Submit Now</button>
        </form>
    </div>
    </div>
  )
}

export default Contact