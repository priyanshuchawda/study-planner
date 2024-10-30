// src/components/ProgressTracker.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProgressTracker = ({ tasks }) => {
  const data = tasks.reduce((acc, task) => {
    const week = new Date(task.date).getWeek();
    acc[week] = acc[week] || { name: `Week ${week}`, completed: 0 };
    if (task.completed) acc[week].completed += 1;
    return acc;
  }, {});

  const chartData = Object.values(data);

  return (
    <LineChart width={500} height={300} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="completed" stroke="#82ca9d" />
    </LineChart>
  );
};

// Helper function to get the week number
Date.prototype.getWeek = function() {
  const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
  const days = Math.floor((this - firstDayOfYear) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
};

export default ProgressTracker;