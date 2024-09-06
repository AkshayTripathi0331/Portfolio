import React from 'react';
import './SocialLinks.css';

function SocialLinks() {
    return (
        <section className="social-links">
        <a
          href="https://www.linkedin.com/in/akshaytripathi1050/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <i className="bi bi-linkedin"></i>
        </a>

        <a
          href="https://github.com/akshaytripathi0331"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <i className="bi bi-github"></i>
        </a>

        <a
          href="https://x.com/Akshay_1050"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-link"
        >
          <i className="bi bi-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com/akshay.tripathi__/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </section>
    );
  }

  export default SocialLinks;