import React from 'react';
import './Me.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Me = () => {
  return (
    <div id="home" className="me">
      <img className="image" src="sijana.jpg" alt="" />
      <h1>
        <span>I'm Sijana C T,</span> frontend developer based in India.
      </h1>
      <p>I am a frontend developer from India, with 1 year of experience.</p>
      <div className="me-action">
        <div className="me-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Connect </p>
          </AnchorLink>
        </div>
        <div className="me-resume">My resume</div>
      </div>
    </div>
  );
};

export default Me;
