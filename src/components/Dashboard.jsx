import React, { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dashboard-container dark-mode" : "dashboard-container"}>
      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Mode Clair" : "🌙 Mode Sombre"}
      </button>

      <h1>Bienvenue sur Student+</h1>
      <p>Organisez votre parcours académique avec un design dynamique et innovant.</p>

      <div className="modules-grid">
        <div className="module">
          <img src="book-icon.png" alt="Matières"/>
          <div>
            <h2>Gestion des matières</h2>
            <p>Ajoutez, modifiez ou supprimez vos matières.</p>
          </div>
        </div>

        <div className="module">
          <img src="grades-icon.png" alt="Notes"/>
          <div>
            <h2>Notes et évaluations</h2>
            <p>Consultez et améliorez vos résultats académiques.</p>
          </div>
        </div>

        <div className="module">
          <img src="calendar-icon.png" alt="Examens"/>
          <div>
            <h2>Examens et calendrier</h2>
            <p>Planifiez et visualisez vos examens.</p>
          </div>
        </div>

        <div className="module">
          <img src="docs-icon.png" alt="Documents"/>
          <div>
            <h2>Documents de cours</h2>
            <p>Accédez aux ressources pédagogiques.</p>
          </div>
        </div>

        <div className="module">
          <img src="reminders-icon.png" alt="Rappels"/>
          <div>
            <h2>Rappels et échéances</h2>
            <p>Gérez vos notifications académiques.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
