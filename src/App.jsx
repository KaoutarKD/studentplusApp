import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subjects from "./pages/Subjects";
import Grades from "./pages/Grades";
import Exams from "./pages/Exams";
import Documents from "./pages/Documents";
import Reminders from "./pages/Reminders";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="App">
    <Navbar /> 
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/register" element={<Register />} />
      </Routes>

  
    </div>
  );
};

export default App;
