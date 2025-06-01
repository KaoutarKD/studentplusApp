import React, { useState } from "react";
import "../styles/Grades.css";
const Grades = () => {
  const [grades, setGrades] = useState([{ subject: "Maths", grade: 18 }, { subject: "Physique", grade: 15 }]);

  return (
    <div>
      <h2>Notes et évaluations</h2>
      <ul>
        {grades.map((item, index) => (
          <li key={index}>{item.subject}: {item.grade}/20</li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;
