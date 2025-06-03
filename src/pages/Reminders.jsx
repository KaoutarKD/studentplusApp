import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import "../styles/Reminders.css";
import "../styles/Icons.css";

const Reminders = () => {
  const [reminders, setReminders] = useState([
    { id: 1, subject: "Mathématiques", date: "2025-06-10" },
    { id: 2, subject: "Physique", date: "2025-06-12" },
  ]);

  return (
    <motion.div 
      className="reminders-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <h2 id="title"> Rappels des Examens</h2>
      {reminders.map((reminder, index) => (
        <div key={index} className="reminder-item">
          <FaBell /> {reminder.subject} - {reminder.date}
        </div>
      ))}
    </motion.div>
  );
};

export default Reminders;
