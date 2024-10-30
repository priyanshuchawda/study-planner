// src/components/StudyCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const StudyCalendar = ({ tasks }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date }) =>
          tasks.filter(task => new Date(task.date).toDateString() === date.toDateString())
            .map((task, index) => <div key={index}>{task.task}</div>)
        }
      />
    </div>
  );
};

export default StudyCalendar;