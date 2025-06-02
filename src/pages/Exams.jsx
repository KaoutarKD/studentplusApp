import React from "react";
import "../styles/Exams.css";

const examsData = [
  { subject: "Mathématiques", date: "10 Juin", duration: "2h" },
  { subject: "Physique", date: "12 Juin", duration: "1h30" },
];

const Exams = () => (
  <div className="exams">
    <h1>📝 Examens et calendrier</h1>
    <table className="exam-table">
      <thead>
        <tr>
          <th>Matière</th>
          <th>Date</th>
          <th>Durée</th>
        </tr>
      </thead>
      <tbody>
        {examsData.map((exam, index) => (
          <tr key={index}>
            <td>{exam.subject}</td>
            <td>{exam.date}</td>
            <td>{exam.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Exams;

