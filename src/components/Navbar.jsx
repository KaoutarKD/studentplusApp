import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" className="home-link">Student +</Link></div>
      <ul className="nav-links">
        <li><Link to="/subjects" className="liens">📚 Matières</Link></li>
        <li><Link to="/grades" className="liens">📊 Notes</Link></li>
        <li><Link to="/exams" className="liens">📅 Examens</Link></li>
        <li><Link to="/documents" className="liens">📄 Documents</Link></li>
        <li><Link to="/reminders" className="liens">⏳ Rappels</Link></li>
        <li><Link to="/login" className="liens">| Se connecter |</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
