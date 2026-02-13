import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import SkillsList from '../components/SkillsList';
import './Skills.css';
import Footer from '../components/Footer';

function Skills() {
  const skillsRef = useRef(null);
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'FastAPI', level: 85 },
    { name: 'RAG Systems', level: 90 },
    { name: 'LLM Fine-tuning', level: 85 },
    { name: 'Prompt Engineering', level: 90 },
    { name: 'MongoDB', level: 80 },
    { name: 'Weaviate', level: 80 },
    { name: 'Docker', level: 85 },
    { name: 'Redis', level: 75 },
    { name: 'Celery', level: 80 },
    { name: 'LangChain', level: 85 },
    { name: 'vLLM', level: 80 },
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
      <Footer />
    </div>
  );
}

export default Skills;
