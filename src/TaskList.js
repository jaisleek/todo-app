import React from 'react';
import TaskItem from './Components/TaskItem.js';

function TaskList({ tasks, onEdit, onDelete, onComplete }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
