import React, { useRef, useState } from 'react';
import logo from '../../assets/main-logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import './Navbar.css';

function Navbar() {
    const menuRef = useRef(null);
    const [menu, setMenu] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // New state to track if menu is open

    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = '0';
        }
        setIsMenuOpen(true); // Set menu as open
    };

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = '-350px';
        }
        setIsMenuOpen(false); // Set menu as closed
    };

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" width='109' height="57" />

            {/* Conditionally render menu open button */}
            {!isMenuOpen && (
                <img src={menu_open} alt="Open Menu" className='nav-mob-open' onClick={openMenu} />
            )}

            <ul ref={menuRef} className='nav-menu'>
                {/* Menu close button */}
                <img src={menu_close} alt="Close Menu" className="nav-mob-close" onClick={closeMenu} />
                
                <li>
                    <AnchorLink className='anchor-link' href='#home' onClick={() => setMenu('home')}>
                        Home
                    </AnchorLink>
                    {menu === 'home' && <hr />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#about' onClick={() => setMenu('about')}>
                        About Me
                    </AnchorLink>
                    {menu === 'about' && <hr />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#services' onClick={() => setMenu('services')}>
                        Services
                    </AnchorLink>
                    {menu === 'services' && <hr />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#work' onClick={() => setMenu('work')}>
                        Portfolio
                    </AnchorLink>
                    {menu === 'work' && <hr />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' href='#contact' onClick={() => setMenu('contact')}>
                        Contact
                    </AnchorLink>
                    {menu === 'contact' && <hr />}
                </li>
            </ul>

            <AnchorLink className='anchor-link' href='#contact'>
                <div className="nav-connect">Connect With Me</div>
            </AnchorLink>
        </div>
    );
}

export default Navbar;
