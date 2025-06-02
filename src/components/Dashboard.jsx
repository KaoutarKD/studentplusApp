import React, { useState } from "react";
import "../styles/Dashboard.css";
import { FaBook, FaChartBar, FaCalendarAlt, FaFileAlt, FaBell } from "react-icons/fa";

const sections = [
  { title: "Matières", icon: <FaBook />, link: "/subjects" },
  { title: "Notes", icon: <FaChartBar />, link: "/grades" },
  { title: "Examens", icon: <FaCalendarAlt />, link: "/exams" },
  { title: "Documents", icon: <FaFileAlt />, link: "/documents" },
  { title: "Rappels", icon: <FaBell />, link: "/reminders" },
];

const Dashboard = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="dashboard-container">
      <h1>🎓 Bienvenue sur Student+</h1>
      <p>Organisez votre parcours académique avec une interface dynamique.</p>

      <div className="modules-grid">
        {sections.map((section, index) => (
          <a
            key={index}
            href={section.link}
            className={`module ${hoverIndex === index ? "hovered" : ""}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="module-icon">{section.icon}</div>
            <h2>{section.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
