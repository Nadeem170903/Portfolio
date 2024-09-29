import React from 'react';
import './Skill.css';

const Skills = () => {
  const skills = [
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Express.js', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'Git', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
    { name: 'GitHub', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Java', image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'SQL (Basic)', image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
    { name: 'Bootstrap', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'MongoDB', image: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={`${skill.name} logo`} className="skill-image" />
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
