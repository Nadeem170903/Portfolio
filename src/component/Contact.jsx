import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p>If you’d like to discuss a project or just say hello, feel free to contact me!</p>
        <a href="mailto:your-email@example.com" className="contact-btn">Email Me</a>
      </div>
    </section>
  );
};

export default Contact;
