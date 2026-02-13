import React from "react";
import { motion } from "framer-motion";
import "./SkillsList.css";

import { SiPython, SiFastapi, SiDjango, SiMongodb, SiMysql, SiPostgresql, SiRedis } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiDocker, SiLinux, SiGithub, SiCelery } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";

// Animation variants
const skillVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

function SkillsList() {
  const skillCategories = [
    {
      category: "GenAI",
      skills: [
        { name: "RAG", icon: <i className="bi bi-robot" style={{ fontSize: '4rem' }}></i> },
        { name: "Hybrid Search", icon: <i className="bi bi-search" style={{ fontSize: '4rem' }}></i> },
        { name: "Agentic AI", icon: <i className="bi bi-diagram-3-fill" style={{ fontSize: '4rem' }}></i> },
        { name: "Prompt Engineering", icon: <i className="bi bi-chat-dots-fill" style={{ fontSize: '4rem' }}></i> },
        { name: "LLM Fine-tuning (Llama 3)", icon: <i className="bi bi-sliders" style={{ fontSize: '4rem' }}></i> },
        { name: "Hugging Face", icon: <i className="bi bi-emoji-smile-fill" style={{ fontSize: '4rem' }}></i> },
        { name: "vLLM", icon: <i className="bi bi-lightning-charge-fill" style={{ fontSize: '4rem' }}></i> },
        { name: "LangChain", icon: <i className="bi bi-link-45deg" style={{ fontSize: '4rem' }}></i> },
        { name: "Vanna AI", icon: <i className="bi bi-chat-left-text-fill" style={{ fontSize: '4rem' }}></i> },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "FastAPI", icon: <SiFastapi style={{ color: '#009688', fontSize: '4rem' }} /> },
        { name: "Django", icon: <SiDjango style={{ color: '#092e20', fontSize: '4rem' }} /> },
        { name: "REST APIs", icon: <i className="bi bi-arrow-left-right" style={{ fontSize: '4rem' }}></i> },
      ]
    },
    {
      category: "Databases / Infra",
      skills: [
        { name: "MongoDB", icon: <SiMongodb style={{ color: '#47a248', fontSize: '4rem' }} /> },
        { name: "MySQL", icon: <SiMysql style={{ color: '#4479a1', fontSize: '4rem' }} /> },
        { name: "PostgreSQL", icon: <SiPostgresql style={{ color: '#336791', fontSize: '4rem' }} /> },
        { name: "Redis", icon: <SiRedis style={{ color: '#dc382d', fontSize: '4rem' }} /> },
        { name: "Weaviate", icon: <i className="bi bi-database-fill-gear" style={{ fontSize: '4rem' }}></i> },
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: <SiPython style={{ color: '#3776ab', fontSize: '4rem' }} /> },
        { name: "C++", icon: <TbBrandCpp style={{ color: '#00599c', fontSize: '4rem' }} /> },
        { name: "JavaScript", icon: <BiLogoJavascript style={{ color: '#f7df1e', fontSize: '4rem' }} /> },
        { name: "HTML", icon: <AiOutlineHtml5 style={{ color: '#e34f26', fontSize: '4rem' }} /> },
        { name: "CSS", icon: <BiLogoCss3 style={{ color: '#1572b6', fontSize: '4rem' }} /> },
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Docker", icon: <SiDocker style={{ color: '#2496ed', fontSize: '4rem' }} /> },
        { name: "Linux", icon: <SiLinux style={{ color: '#fcc624', fontSize: '4rem' }} /> },
        { name: "Git/GitHub", icon: <SiGithub style={{ color: '#181717', fontSize: '4rem' }} /> },
        { name: "Celery", icon: <SiCelery style={{ color: '#37814a', fontSize: '4rem' }} /> },
        { name: "VS Code", icon: <i className="bi bi-code-square" style={{ fontSize: '4rem' }}></i> },
        { name: "Cursor", icon: <i className="bi bi-cursor-fill" style={{ fontSize: '4rem' }}></i> },
      ]
    }
  ];

  return (
    <motion.section
      className="skills-overview"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <h1>Skills Overview</h1>

      {skillCategories.map((categoryObj, catIndex) => (
        <div key={catIndex} className="skill-category">
          <h2 className="category-title">{categoryObj.category}</h2>
          <motion.div className="skills-grid">
            {categoryObj.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="skill-item"
                variants={skillVariant}
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.section>
  );
}

export default SkillsList;
