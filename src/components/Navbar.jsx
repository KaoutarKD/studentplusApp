import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaHome, FaBook, FaChartBar, FaCalendarAlt, FaFileAlt, FaBell, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">      
    
      <div className="logo"><Link to="/" className="liens"><img src="/logo.png" alt="Student+ Logo" style={{ width: "100px", height: "auto" }} /></Link></div>
      <ul className="nav-links">
        <li><Link to="/subjects" className="liens"><FaBook /> Matières</Link></li>
        <li><Link to="/grades" className="liens"><FaChartBar /> Notes</Link></li>
        <li><Link to="/exams" className="liens"><FaCalendarAlt /> Examens</Link></li>
        <li><Link to="/documents" className="liens"><FaFileAlt /> Documents</Link></li>
        <li><Link to="/reminders" className="liens"><FaBell /> Rappels</Link></li>
        <li><Link to="/login" className="liens"><FaSignInAlt /> Connexion</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
