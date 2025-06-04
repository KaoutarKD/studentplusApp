import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaUpload } from "react-icons/fa";
import "../styles/Documents.css";

const initialDocs = [
  { id: 1, name: "Rapport de stage", type: "PDF" },
  { id: 2, name: "Examen blanc", type: "DOCX" },
];

const Documents = () => {
  const [documents, setDocuments] = useState(initialDocs);
  const [fileName, setFileName] = useState("");

  const handleUpload = () => {
    if (fileName) {
      const newDoc = { id: documents.length + 1, name: fileName, type: "Nouveau" };
      setDocuments([...documents, newDoc]);
      setFileName("");
    }
  };

  return (
    <motion.div
      className="documents-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1><FaFileAlt /> Mes documents</h1>
      
      <div className="upload-section">
        <input 
          type="text" 
          placeholder="Nom du fichier" 
          value={fileName} 
          onChange={(e) => setFileName(e.target.value)} 
        />
        <button onClick={handleUpload}><FaUpload /> Upload</button>
      </div>

      <div className="documents-list">
        {documents.map((doc) => (
          <motion.div 
            key={doc.id} 
            className="document-card"
            whileHover={{ scale: 1.05 }}
          >
            <p>{doc.name} ({doc.type})</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Documents;
