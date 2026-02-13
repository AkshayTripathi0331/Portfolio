import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Header from "../components/Header";
import SkillsList from "../components/SkillsList";
import Footer from "../components/Footer";
import profilePic from "../assets/akshay-tripathi.png";
import "./Home.css";
import ProjectsList from "../components/ProjectsList";
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx"; // Import the custom hook

// Animation variants for reusable motion elements
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

// const slideInLeft = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
// };

function Home() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: aboutRef, controls: aboutControls } = useScrollAnimation();
  const { ref: skillsRef, controls: skillsControls } = useScrollAnimation();
  const { ref: projectsRef, controls: projectsControls } = useScrollAnimation();

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate={heroControls}
            variants={fadeIn}
          >
            <h1>Akshay Tripathi</h1>
            <p>Software Development Engineer | Generative AI + Backend Specialist</p>
            <motion.a
              href="#about"
              className="cta-button"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Learn More About Me
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <img src={profilePic} alt="Akshay Tripathi" className="profile-pic" />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section" ref={aboutRef}>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={aboutControls}
          variants={fadeIn}
        >
          About Me
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          I am a Software Development Engineer focused on Generative AI, specializing in building intelligent systems that solve real-world problems. I design and develop RAG systems, Agentic AI workflows, and LLM fine-tuning pipelines that power production-grade applications.
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          With approximately 2.5 years of experience at Shorthills AI (joined July 2023), I work at the intersection of backend engineering and cutting-edge AI technologies. My expertise spans from building scalable FastAPI services to optimizing LLM inference with vLLM, creating hybrid search systems, and implementing agentic orchestration with AWS.
        </motion.p>
      </section>

      {/* Skills Overview Section */}
      <motion.section
        className="skills-section"
        ref={skillsRef}
        initial="hidden"
        animate={skillsControls}
        variants={fadeInUp}
      >
        <SkillsList />
      </motion.section>

      {/* Featured Projects Section with Grid Layout */}
      <section className="projects-overview">
        <motion.h2
          className="section-title"
          ref={projectsRef}
          initial="hidden"
          animate={projectsControls}
          variants={fadeIn}
        >
          Explore My Work
        </motion.h2>
        <ProjectsList limit={3} />

        <motion.div
          className="view-more-container"
          style={{ textAlign: "center", marginTop: "20px" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <a href="/projects" className="cta-button">
            View More Projects
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
