import React, { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const sections = [
    { title: "Matières", icon: "📖", link: "/subjects" },
    { title: "Notes", icon: "📊", link: "/grades" },
    { title: "Examens", icon: "📝", link: "/exams" },
    { title: "Documents", icon: "📂", link: "/documents" },
    { title: "Rappels", icon: "🔔", link: "/reminders" },
  ];

  return (
    <div className={darkMode ? "dashboard-container dark-mode" : "dashboard-container"}>
      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Mode Clair" : "🌙 Mode Sombre"}
      </button>

      <h1>Bienvenue sur Student+</h1>
      <p>Organisez votre parcours académique en un seul endroit.</p>

      <div className="modules-grid">
        {sections.map((section, index) => (
          <a key={index} href={section.link} className="module">
            <span className="icon">{section.icon}</span>
            <h2>{section.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
