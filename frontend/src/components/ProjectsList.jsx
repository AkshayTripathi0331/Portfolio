import React from 'react';
import { motion } from 'framer-motion';
import ToDoPic from "../assets/To-do-list.png";
import RaeTourPic from "../assets/raebareli_tour.png";
import AdvGamePic from "../assets/Adventure_game.png";
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
    title: 'myTodoList Application',
    description: 'Task management web application built with React.js.',
    link: 'https://todolist-qbdw.onrender.com/',
    image: ToDoPic 
  },
  {
    id: 2,
    title: 'CityGuide Website',
    description: 'Responsive website showcasing local attractions.',
    link: 'https://akshaytripathi0331.github.io/raebareli.github.io/',
    image: RaeTourPic
  },
  {
    id: 3,
    title: 'Adventure Game',
    description: 'Fully functional game built using JavaScript and HTML.',
    link: 'https://akshaytripathi0331.github.io/Adventure-Game/',
    image: AdvGamePic
  },
  {
    id: 4,
    title: 'PlacePicker',
    description: 'A location picker app using Google Maps API.',
    link: 'https://github.com/AkshayTripathi0331/PlacePicker',
    image: ToGoPlaces
  },
  {
    id: 5,
    title: 'QuizPlay',
    description: 'A quiz application built for fun learning experiences.',
    link: 'https://github.com/AkshayTripathi0331/QuizPlay',
    image: QuizPage
  },
  {
    id: 6,
    title: 'ShoppyCart',
    description: 'E-commerce platform with a smooth user experience.',
    link: 'https://github.com/AkshayTripathi0331/ShoppyCart',
    image: ShoppyCart
  },
  {
    id: 7,
    title: 'Tic-tac-toe Game',
    description: 'Classic tic-tac-toe game built using JavaScript.',
    link: 'https://github.com/AkshayTripathi0331/Tic-tak-toe',
    image: TikTakToe
  },
  {
    id: 8,
    title: 'InvestMate',
    description: 'An app to track and manage your investments.',
    link: 'https://github.com/AkshayTripathi0331/InvestMate',
    image: InvestMate
  },
  {
    id: 9,
    title: 'Habitify',
    description: 'A habit tracking app with a clean UI.',
    link: 'https://github.com/AkshayTripathi0331/Habitify',
    image: Habitfy
  },
  {
    id: 10,
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
