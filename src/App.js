// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import StudyCalendar from './components/StudyCalendar';
import ProgressTracker from './components/ProgressTracker';
import StudyPlan from './components/StudyPlan';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>Study Planner</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <StudyCalendar tasks={tasks} />
      <ProgressTracker tasks={tasks} />
      <StudyPlan />
    </div>
  );
}

export default App;