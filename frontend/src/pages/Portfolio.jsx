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
      duration: 'July 2023 – Present',
      projects: [
        {
          name: 'Agent Assist',
          points: [
            'Implemented AGENTIC RAG system to handle 16 agents, achieving 85% accuracy during UAT.',
            'Integrated MongoDB Atlas, improving vector retrieval efficiency and boosting API response times by 30%.',
            'Enhanced query processing with fine-tuned Meta-Llama-3-8B-Instruct.',
            'Developed FastAPI endpoints for real-time query resolution.',
            'Built async pipelines using Celery and Redis, increasing throughput by 40%.',
          ],
        },
        {
          name: 'BestViewsReviews',
          points: [
            'Automated content generation with Llama 3.8B, reducing manual workload by 40%.',
            'Optimized FastAPI endpoints, cutting latency by 30%.',
            'Migrated pipeline to Weaviate v4 + Redis, improving retrieval speed by 50%.',
            'Fine-tuned models using vLLM, increasing snippet accuracy by 25%.',
          ],
        },
        {
          name: 'Genysis',
          points: [
            'Developed dynamic APIs for frontend-backend interaction.',
            'Deployed services using Docker and Ngrok for smooth workflows.',
          ],
        },
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Exposys Data Labs',
      duration: 'June 2022 – July 2022',
      description: 'Built responsive websites with Node.js backend. Designed RESTful APIs with JWT & OAuth for secure user auth.'
    },
  ];

  return (
    <div>
      <Header />
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

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h2>{exp.role}</h2>
            <h3>{exp.company} | {exp.duration}</h3>
            
            {exp.projects ? (
              exp.projects.map((proj, i) => (
                <div key={i} className="project-block">
                  <h4 style={{ marginTop: '10px' }}>{proj.name}</h4>
                  <ul>
                    {proj.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>{exp.description}</p>
            )}
          </motion.div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Portfolio;
