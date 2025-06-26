import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../features/tasksSlice';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveEdit = () => {
    dispatch(editTask({ id: task.id, text }));
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={saveEdit}>Salvar</button>
        </>
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancelar' : 'Editar'}
      </button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Excluir</button>
    </li>
  );
}