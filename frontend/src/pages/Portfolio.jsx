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
      duration: 'July 2023 – Present (~2.5 years)',
      projects: [
        {
          name: 'Agent Assist (Agentic RAG System)',
          tag: 'Private / Company Project',
          points: [
            'Built hybrid RAG using MongoDB Atlas Vector Search with keyword scoring for improved retrieval accuracy',
            'Developed intent engine with 100+ intents achieving 95%+ accuracy during UAT phase',
            'Implemented RapidFuzz fallback classifier reducing fallback queries by 40%+',
            'Designed Celery + Redis async pipelines processing 14+ knowledge sources',
            'Dockerized FastAPI services with embeddings pipeline and Llama-3 inference optimization',
            'Created AWS agentic orchestrator using Action Groups + Lambda, reducing manual effort by 70%',
          ],
        },
        {
          name: 'GetHelp (Intent & Entity Platform)',
          tag: 'Private / Company Project',
          points: [
            'Engineered multi-intent classification system handling 10L+ queries per month',
            'Designed 190+ hierarchical intents with multi-label inference capabilities',
            'Fine-tuned Llama 3-8B Instruct model for domain-specific intent recognition',
            'Generated and validated 15k+ synthetic training samples for model improvement',
          ],
        },
        {
          name: 'BestViewsReviews (Review Intelligence System)',
          tag: 'Private / Company Project',
          points: [
            'Automated extraction of experience-rich review snippets from user-generated content',
            'Implemented hybrid RAG using Weaviate v4 + Redis for efficient retrieval',
            'Fine-tuned Llama 3 8B on 10k+ samples achieving +25% accuracy improvement',
            'Optimized inference pipeline using vLLM reducing latency by 30%',
            'Enhanced Weaviate hybrid search achieving 50% faster retrieval speeds',
          ],
        },
        {
          name: 'Genysis (Genetic History Assistant)',
          tag: 'Private / Company Project',
          points: [
            'Reduced genetic consultation time by 20–30 minutes through intelligent automation',
            'Built lightweight RAG system with smart chunking for medical documentation',
            'Designed prompt flows for structured patient interview guidance',
            'Integrated PedigreeJS for interactive family-tree diagram generation',
          ],
        },
      ]
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
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{exp.role}</h2>
            <h3>{exp.company} | {exp.duration}</h3>

            {exp.projects ? (
              exp.projects.map((proj, i) => (
                <div key={i} className="project-block">
                  <h4 style={{ marginTop: '10px' }}>{proj.name}</h4>
                  {proj.tag && <span className="project-tag">{proj.tag}</span>}
                  <ul>
                    {proj.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : exp.points ? (
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{exp.description}</p>
            )}
          </motion.div>
        ))}
      </section>
      <Footer />
    </div >
  );
}

export default Portfolio;
