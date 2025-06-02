import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaHome, FaBook, FaChartBar, FaCalendarAlt, FaFileAlt, FaBell, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Student +</div>
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Accueil</Link></li>
        <li><Link to="/subjects"><FaBook /> Matières</Link></li>
        <li><Link to="/grades"><FaChartBar /> Notes</Link></li>
        <li><Link to="/exams"><FaCalendarAlt /> Examens</Link></li>
        <li><Link to="/documents"><FaFileAlt /> Documents</Link></li>
        <li><Link to="/reminders"><FaBell /> Rappels</Link></li>
        <li><Link to="/login"><FaSignInAlt /> Connexion</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
