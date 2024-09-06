import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import SkillsList from '../components/SkillsList';
import './Skills.css';
import Footer from '../components/Footer';

function Skills() {
  const skillsRef = useRef(null);
  const skills = [
    { name: 'React.js', level: 75 },
    { name: 'Next.js', level: 70 },
    { name: 'Redux', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Material-UI', level: 75 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${entry.target.dataset.level}%`;
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    const skillBars = document.querySelectorAll('.progress');

    skillBars.forEach((bar) => {
      observer.observe(bar);
    });

    return () => {
      skillBars.forEach((bar) => {
        observer.unobserve(bar);
      });
    };
  }, []);

  return (
    <div>
      <Header />
      <SkillsList />
      <section className="skills-progress" ref={skillsRef}>
        <h2>My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  data-level={skill.level}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Skills;
