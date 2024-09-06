import React from "react";
import { motion } from "framer-motion";
import "./SkillsList.css";

import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { SiMaterialformkdocs } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

// Animation variants for each skill item
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
  return (
    <motion.section
      className="skills-overview"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <h1>Skills Overview</h1>
      <motion.div className="skills-grid">
        <motion.div className="skill-item" variants={skillVariant}>
          <i className="bi bi-bootstrap-fill"></i>
          <p>Bootstrap</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <FaReact style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>React.js</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <i className="bi bi-github"></i>
          <p>Git & GitHub</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <i className="bi bi-code-slash"></i>
          <p>JavaScript</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <i className="bi bi-file-earmark-code-fill"></i>
          <p>HTML & CSS</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <i className="bi bi-node-plus-fill"></i>
          <p>Node.js</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <TbBrandRedux style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>Redux</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <RiNextjsFill style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>Next.js</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <SiMaterialformkdocs style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>Material-UI</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <SiJquery style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>jQuery</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <BiLogoTailwindCss style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>Tailwind CSS</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <i className="bi bi-filetype-sql"></i>
          <p>MySQL</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <TbBrandReactNative style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>React Native</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <SiPython style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>Python</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <SiFastapi style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>FastAPI</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <TbBrandCpp style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>C++</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <FaJava style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>Java</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <FaLinux style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>Linux</p>
        </motion.div>
        <motion.div className="skill-item" variants={skillVariant}>
          <TbBrandVscode style={{ color: '#007bff', fontSize: '4rem' }} />
          <p>VS Code</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SkillsList;
