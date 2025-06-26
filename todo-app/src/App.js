import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h1>To-Do List</h1>
      <TaskForm />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
}

export default App;