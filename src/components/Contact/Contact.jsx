import React from 'react';
import './Contact.css';

const Contact = () => {
  const onSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '30b1013c-2b80-40b5-9e20-8e982d953195');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on simple new projects,so feel free
            to send me a message about anything that you want me to work on.You
            can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>sijanact@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p> 9495062032</p>
            </div>
            <div className="contact-detail">
              <p>India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
