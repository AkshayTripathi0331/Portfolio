import React from 'react';
import ProjectsList from '../components/ProjectsList';
import Header from '../components/Header'; // Renamed component for clarity
import Footer from '../components/Footer';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <h1 className="projects-title">Projects</h1>
      <ProjectsList /> 
      <Footer />
    </div>
  );
}

export default Projects;
