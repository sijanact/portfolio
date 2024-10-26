import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="navbar">
      <h1>Sijana.</h1>
      <img onClick={openMenu} className="open" src="open.png" />
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} className="close" src="close1.png" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('about')}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu('projects')}>Projects</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        {' '}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p>Connect with me</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
