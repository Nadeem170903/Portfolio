import React from 'react';
import './Project.css';

const projects = [
  {
    name: 'E-commerce Website',
    description: 'An online shopping platform with a variety of products and a user-friendly interface.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://sweggermart.vercel.app/',
    image: 'https://via.placeholder.com/300?text=E-commerce+Website', // Replace with actual image URLs
  },
  {
    name: 'Instagram Clone',
    description: 'A social media platform clone that enables users to share photos and connect with others.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    link: 'https://github.com/Nadeem170903/Instagram-mini',
    image: 'https://via.placeholder.com/300?text=Instagram+Clone', // Replace with actual image URLs
  },
  {
    name: 'Airbnb Clone',
    description: 'A clone of the popular Airbnb platform, allowing users to search and book accommodations.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    link: 'https://your-airbnb-clone-link.com',
    image: 'https://via.placeholder.com/300?text=Airbnb+Clone', // Replace with actual image URLs
  },


  {
    name: 'Todo List App',
    description: 'A simple app to manage daily tasks efficiently.',
    techStack: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/Nadeem170903/Todo-App/tree/main',
    image: 'https://via.placeholder.com/300?text=Todo+List+App', // Replace with actual image URLs
  },
  {
    name: 'Simon Game',
    description: 'A fun memory game to test your concentration and recall abilities.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Nadeem170903/Simon_Game',
    image: 'https://via.placeholder.com/300?text=Simon+Game', // Replace with actual image URLs
  },
];

const ProjectComponent = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              <strong>Tech Stack: </strong>
              <span>{project.techStack.join(', ')}</span>
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
