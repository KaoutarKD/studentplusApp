import React, { useState } from "react";
import "../styles/Subjects.css";

const subjectsList = ["Mathématiques", "Physique", "Informatique", "Histoire"];

function Subjects() {
  return (
    <div className="subjects">
      <h1>📚 Votre matières</h1>
      <ul>
        {subjectsList.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;

