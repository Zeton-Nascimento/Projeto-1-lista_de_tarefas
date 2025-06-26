import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TaskList({ filter }) {
  const tasks = useSelector(state => state.tasks);
  const filtered = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <ul>
      {filtered.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}