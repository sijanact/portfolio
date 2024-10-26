import React from 'react';
import './app.css';
import Navbar from './components/Navbar/Navbar';
import Me from './components/Me/Me';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Me />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
