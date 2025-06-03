import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";

const ExamCalendar = ({ exams }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <div className="exam-list">
        <h3>Examens du {selectedDate.toDateString()} :</h3>
        {exams.filter(exam => exam.date === selectedDate.toDateString()).map((exam, index) => (
          <div key={index} className="exam-item">
            📌 {exam.subject} - {exam.time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamCalendar;
