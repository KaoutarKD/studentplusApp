import React from "react";
import "../styles/Documents.css";


const documentsData = [
  { title: "Cours Mathématiques", type: "PDF", link: "#" },
  { title: "Résumé Physique", type: "Word", link: "#" },
  { title: "Présentation Informatique", type: "PPT", link: "#" }
];

const Documents = () => (
  <div className="documents">
    <h1>📂 Gestion des documents</h1>
    <p>Accédez facilement à vos cours, fiches et supports.</p>
    <ul className="document-list">
      {documentsData.map((doc, index) => (
        <li key={index}>
          <a href={doc.link}>{doc.title} - {doc.type}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Documents;

