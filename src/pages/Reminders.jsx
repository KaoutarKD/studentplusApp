import React from "react";
import "../styles/Remiders.css";

const remindersData = [
  { title: "📝 Devoir de maths", date: "5 Juin" },
  { title: "📅 Examen de physique", date: "10 Juin" },
  { title: "📢 Présentation informatique", date: "12 Juin" },
];

const Reminders = () => (
  <div className="reminders">
    <h1>⏰ Rappels & Échéances</h1>
    <ul>
      {remindersData.map((reminder, index) => (
        <li key={index}>{reminder.title} - {reminder.date}</li>
      ))}
    </ul>
  </div>
);

export default Reminders;
