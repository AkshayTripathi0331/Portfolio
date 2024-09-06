import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.3 } }
};

function Contact() {
  return (
    <motion.div
      className="contact-page"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      
      <motion.section className="hero" variants={fadeInUp}>
        <h1>Get in Touch</h1>
        <p>Feel free to reach out with any questions, feedback, or to just say hello!</p>
      </motion.section>
      
      <motion.div className="contact-form-wrapper" variants={fadeInUp}>
        <ContactForm />
      </motion.div>
      
      <motion.section className="social-links" variants={staggerContainer}>
        <h3>Connect with Me</h3>
        <motion.div className="social-icons" variants={fadeInUp}>
          <a href="https://www.linkedin.com/in/akshaytripathi1050/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/akshaytripathi0331" target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://x.com/Akshay_1050" target="_blank" rel="noopener noreferrer" className="twitter-link">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/akshay.tripathi__/" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <i className="bi bi-instagram"></i>
          </a>
        </motion.div>
      </motion.section>

      <Footer />
    </motion.div>
  );
}

export default Contact;
