import React, { useState } from 'react'
import logo from '../../assets/main-logo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import underline from '../../assets/nav_underline.svg'
import './Navbar.css'
function Navbar() {
  const [menu,setMenu] = useState('about')
  return (
    <div className='navbar'>
        
       
        <img src={logo} alt="" width='109' height="57"  
        
            
    />
    <img src={menu_open} alt="" className='nav-mob-open' />
        <ul className='nav-menu'>
          <img src={menu_close} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'> <p onClick={()=>{setMenu('home')}}>Home</p></AnchorLink>{menu === 'home'?<hr style={{
            height:'5px',
            width:'70%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=>{setMenu('about')}}>About Me</p></AnchorLink>{menu === 'about'?<hr style={{
            height:'5px',
            width:'70%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=>{setMenu('services')}}>Services</p> </AnchorLink>{menu === 'services'?<hr style={{
            height:'5px',
            width:'70%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={()=>{setMenu('work')}}>Portfolio</p> </AnchorLink>{menu === 'work'?<hr style={{
            height:'5px',
            width:'70%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/>:<></>}
            </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'>  <p onClick={()=>{setMenu('contact')}}>Contact</p> </AnchorLink>{menu === 'contact'?<hr style={{
            height:'5px',
            width:'70%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/>:<></>}</li>
        </ul>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>  <div className="nav-connect">Connect With Me </div></AnchorLink>
        </div>
  )
}

export default Navbar

// https://www.youtube.com/watch?v=hkHHwA-vEyQ&list=WL&index=4