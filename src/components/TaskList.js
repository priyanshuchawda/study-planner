// src/components/TaskList.js
import React, { useState } from 'react';

const TaskList = ({ tasks, setTasks }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const addTask = () => {
    if (task && date) {
      setTasks(prevTasks => [
        ...prevTasks,
        { id: Date.now(), task, date, completed: false }
      ]);
      setTask('');
      setDate('');
    } else {
      alert("Please enter both task and date.");
    }
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks => 
      prevTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  };

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task..."
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            onClick={() => toggleComplete(t.id)}
            style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
          >
            {t.task} (Due: {t.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;