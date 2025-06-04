import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import "../styles/Subjects.css";

const initialSubjects = [
  { id: 1, name: "Mathématiques", code: "MATH101" },
  { id: 2, name: "Physique", code: "PHYS201" },
  { id: 3, name: "Informatique", code: "CS301" },
];

const Subjects = () => {
  const [subjects] = useState(initialSubjects);

  return (
    <motion.div 
      className="subjects-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1><FaBookOpen /> Liste des matières</h1>
      <div className="subjects-list">
        {subjects.map((subject) => (
          <motion.div 
            key={subject.id} 
            className="subject-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{subject.name}</h3>
            <p>Code : {subject.code}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Subjects;
