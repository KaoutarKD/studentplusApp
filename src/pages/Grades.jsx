import React, { useState } from "react";
import "../styles/Grades.css";

const gradesData = [
  { subject: "Mathématiques", grade: "16/20", comment: "Très bon travail !" },
  { subject: "Physique", grade: "14/20", comment: "Peut mieux faire" },
];

const Grades = () => (
  <div className="grades">
    <h1>📊 Notes et évaluations</h1>
    <table className="grades-table">
      <thead>
        <tr>
          <th>Matière</th>
          <th>Note</th>
          <th>Commentaires</th>
        </tr>
      </thead>
      <tbody>
        {gradesData.map((grade, index) => (
          <tr key={index}>
            <td>{grade.subject}</td>
            <td>{grade.grade}</td>
            <td>{grade.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Grades;

