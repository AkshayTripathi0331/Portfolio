import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Portfolio.css';

function Portfolio() {
  const experiences = [
    {
      role: 'Software Development Engineer',
      company: 'Shorthills AI',
      duration: 'July 2023 - Present',
      description: 'Integrated Pedigree JS into a React application, enhancing functionality. Developed 10+ pages and components from scratch using Material-UI and Bootstrap, improving UI/UX by 30%.'
    },
    {
      role: 'Technical Content Writer Intern',
      company: 'GeeksforGeeks',
      duration: 'Dec 2022 - June 2023',
      description: 'Authored 160+ technical articles on programming, contributing to the platform’s knowledge base.'
    },
    {
      role: 'Web Developer Intern',
      company: 'Exposys Data Labs',
      duration: 'June 2022 - July 2022',
      description: 'Designed and deployed a responsive website using HTML, CSS, and JavaScript. Integrated dynamic features to enhance user interaction.'
    },
  ];

  return (
    <div>
      <Header />
      
      {/* Experience Section */}
      <section className="experience-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="experience-title"
          style={{ color: 'white' }}
        >
          Experience
        </motion.h1>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{experience.role}</h2>
            <h3>{experience.company} | {experience.duration}</h3>
            <p>{experience.description}</p>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
