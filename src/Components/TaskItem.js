import React from 'react';

function TaskItem({ task, onEdit, onDelete, onComplete }) {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => onComplete(task.id)}>Complete</button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => {
        if (window.confirm('Are you sure you want to delete this task?')) {
          onDelete(task.id);
        }
      }}>Delete</button>
    </div>
  );
}

export default TaskItem;
