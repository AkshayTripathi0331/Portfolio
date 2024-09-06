import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create this CSS file for styling

function Header() {
  return (
    <header className="header-component">
      <nav className="header-navbar">
        <div className="header-logo">
          <Link to="/">MyPortfolio</Link>
        </div>
        <ul className="header-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li> 
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
