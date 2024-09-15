import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    setTaskToEdit(null);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: true } : task)));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onSubmit={taskToEdit ? editTask : addTask} taskToEdit={taskToEdit} onCancel={() => setTaskToEdit(null)} />
      <TaskList tasks={tasks} onEdit={setTaskToEdit} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  );
}

export default App;
