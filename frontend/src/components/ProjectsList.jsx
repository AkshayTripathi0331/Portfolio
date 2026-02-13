import React from 'react';
import { motion } from 'framer-motion';
import ToGoPlaces from "../assets/toGoPlaces.png";
import QuizPage from "../assets/quiz page.png";
import ShoppyCart from "../assets/ShoppyCart.png";
import TikTakToe from "../assets/tik-tak-toe.png";
import InvestMate from "../assets/InvestMate.png"
import Habitfy from "../assets/HabitList.png"
import SnapNotes from "../assets/SanpNotes.png"
import './ProjectsList.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const projectList = [
  {
    id: 1,
    title: 'PlacePicker',
    description: 'A location picker app using Google Maps API.',
    link: 'https://github.com/AkshayTripathi0331/PlacePicker',
    image: ToGoPlaces
  },
  {
    id: 2,
    title: 'QuizPlay',
    description: 'A quiz application built for fun learning experiences.',
    link: 'https://github.com/AkshayTripathi0331/QuizPlay',
    image: QuizPage
  },
  {
    id: 3,
    title: 'ShoppyCart',
    description: 'E-commerce platform with a smooth user experience.',
    link: 'https://github.com/AkshayTripathi0331/ShoppyCart',
    image: ShoppyCart
  },
  {
    id: 4,
    title: 'Tic-tac-toe Game',
    description: 'Classic tic-tac-toe game built using JavaScript.',
    link: 'https://github.com/AkshayTripathi0331/Tic-tak-toe',
    image: TikTakToe
  },
  {
    id: 5,
    title: 'InvestMate',
    description: 'An app to track and manage your investments.',
    link: 'https://github.com/AkshayTripathi0331/InvestMate',
    image: InvestMate
  },
  {
    id: 6,
    title: 'Habitify',
    description: 'A habit tracking app with a clean UI.',
    link: 'https://github.com/AkshayTripathi0331/Habitify',
    image: Habitfy
  },
  {
    id: 7,
    title: 'Snapnote',
    description: 'An app to take quick notes and organize them.',
    link: 'https://github.com/AkshayTripathi0331/Snapnote',
    image: SnapNotes
  },
];

function ProjectsList({ limit }) {
  const displayedProjects = limit ? projectList.slice(0, limit) : projectList;

  return (
    <motion.section
      className="projects-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="projects-list">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectsList;
