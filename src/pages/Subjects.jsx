import React, { useState } from "react";
import "../styles/Subjects.css";

const Subjects = () => {
  const [subjects, setSubjects] = useState(["Maths", "Physique", "Informatique"]);

  return (
    <div>
      <h2>Gestion des matières</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subjects;
