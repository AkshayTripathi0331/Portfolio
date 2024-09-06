import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-component">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h2>MyPortfolio</h2>
          <p>Your go-to place to explore my work and get in touch.</p>
        </div>
        <div className="footer-section footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/skills">Skills</a></li>
          </ul>
        </div>
        <div className="footer-section footer-social">
          <h2>Connect with Me</h2>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/akshaytripathi1050/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/akshaytripathi0331" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://x.com/Akshay_1050" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:akshaytripathi1050@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyPortfolio | Designed by Akshay Tripathi</p>
      </div>
    </footer>
  );
}

export default Footer;
