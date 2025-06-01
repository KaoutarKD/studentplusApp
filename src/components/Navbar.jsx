import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Student+</h1>
      <ul>
        <li><Link to="/">🏠 Accueil</Link></li>
        <li><Link to="/subjects">📚 Matières</Link></li>
        <li><Link to="/grades">📊 Notes</Link></li>
        <li><Link to="/exams">📅 Examens</Link></li>
        <li><Link to="/documents">📄 Documents</Link></li>
        <li><Link to="/reminders">⏳ Rappels</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
