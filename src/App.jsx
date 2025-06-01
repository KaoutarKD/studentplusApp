import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Subjects from "./pages/Subjects";
import Grades from "./pages/Grades";
import Exams from "./pages/Exams";
import Documents from "./pages/Documents";
import Reminders from "./pages/Reminders";

const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/reminders" element={<Reminders />} />
      </Routes>
    </>
  );
};

export default App;
