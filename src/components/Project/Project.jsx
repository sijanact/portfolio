import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-list">
        <div className="work">
          <img src="dr.jpg" alt="" />
          <div className="layer">
            <h3>Dr.Booking App</h3>
            <p>
              A doctor booking app is a mobile or web application designed to
              streamline the process of finding and scheduling appointments with
              doctors.Patients can view available doctors, check their profiles
              and book appointments in real-time.
            </p>
          </div>
        </div>
        <div className="work">
          <img src="ecom.jpg" alt="" />
          <div className="layer">
            <h3>Ecom Website</h3>
            <p>
              An ecom app is a digital platform that facilitates online
              shopping, allowing users to browse, purchase, and manage orders
              for various products or services directly from their mobile device
              or computer.
            </p>
          </div>
        </div>
        <div className="work">
          <img src="todo1.png" alt="" />
          <div className="layer">
            <h3>Todo App</h3>
            <p>
              A to-do app is a productivity tool designed to help users organize
              and manage tasks efficiently. It allows users to create,
              prioritize, and track tasks, ensuring that nothing important is
              overlooked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
