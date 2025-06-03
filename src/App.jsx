import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // ✅ Ajout de Framer Motion
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subjects from "./pages/Subjects";
import Grades from "./pages/Grades";
import Exams from "./pages/Exams";
import Documents from "./pages/Documents";
import Reminders from "./pages/Reminders";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated && <Navbar />}
      
      <AnimatePresence mode="wait"> {/* ✅ Animation fluide entre les pages */}
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
