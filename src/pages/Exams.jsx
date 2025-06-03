import React, { useState } from "react";
import ExamCalendar from "../components/Calendar";
import { v4 as uuidv4 } from "uuid";
import { FaBook, FaCalendarAlt, FaFileAlt, FaBell } from "react-icons/fa"; 
import { motion } from "framer-motion"; 
import "../styles/Exams.css"; 
import "../styles/Icons.css";

const Exams = () => {
  const [exams, setExams] = useState([
    { id: uuidv4(), subject: "Mathématiques", date: "2025-06-10", time: "08:30" },
    { id: uuidv4(), subject: "Physique", date: "2025-06-12", time: "10:00" },
  ]);

  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAddExam = () => {
    const newExam = { id: uuidv4(), subject, date, time };
    setExams([...exams, newExam]);
    setSubject("");
    setDate("");
    setTime("");
  };

  return (
    <motion.div 
      className="exams-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="titre"><FaBook /> Ajouter un examen</h1>
      <input type="text" placeholder=" Matière" value={subject} onChange={(e) => setSubject(e.target.value)} className="input-field" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-field" />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="input-field" />
      <button id="bttn" onClick={handleAddExam}><FaFileAlt /> Ajouter</button>

      <h3 className="titre"><FaCalendarAlt /> Votre Calendrier</h3>
      <ExamCalendar exams={exams} />

      <h3 className="titre"><FaBell /> Rappels des examens</h3>
    </motion.div>
  );
};

export default Exams;
