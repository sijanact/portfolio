import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="sijana.jpg" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I’m a passionate Frontend Developer with a strong focus on
              creating seamless, responsive, and visually engaging user
              experiences. I specialize in modern JavaScript frameworks like
              React and Node, with expertise in HTML, CSS.I enjoy working with
              tools like Vite to streamline and optimize project workflows,
              keeping my code efficient and performance-focused.
            </p>
            <p>
              I’m constantly exploring new techniques and staying updated with
              the latest industry trends to bring fresh, effective solutions to
              every project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & css</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
