import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Left Section - Text */}
      <div className="about-text">
        <h1 className="about-heading">
          My name is <span className="highlight">Nadeem Ahmad</span>
        </h1>
        <p className="about-description">
          I'm a Full Stack Developer with a passion for building responsive and
          efficient web applications. Let’s create something amazing together.
        </p>
        <button className="hire-me-btn">Hire Me</button>

        {/* Skills section */}
        <div className="skills">
          <span className="skill">React</span>
          <span className="skill">Node.js</span>
          <span className="skill">MongoDB</span>
          <span className="skill">Express.js</span>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="about-image-section">
        <div className="experience-tag">
           <span>Fresher</span>
        </div>
        <img
          src="public/WhatsApp Image 2024-09-29 at 12.35.29 PM.jpeg"
          alt="Professional"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default AboutMe;
