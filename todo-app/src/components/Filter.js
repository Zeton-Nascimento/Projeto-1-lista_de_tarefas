import React from 'react';

export default function Filter({ filter, setFilter }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <button disabled={filter === 'all'} onClick={() => setFilter('all')}>Todas</button>
      <button disabled={filter === 'completed'} onClick={() => setFilter('completed')}>Concluídas</button>
      <button disabled={filter === 'pending'} onClick={() => setFilter('pending')}>Pendentes</button>
    </div>
  );
}