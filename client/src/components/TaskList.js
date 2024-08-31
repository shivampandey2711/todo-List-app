import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    const res = await axios.post('http://localhost:5000/api/tasks', { title: newTask });
    setTasks([...tasks, res.data]);
    setNewTask('');
  };

  const toggleTask = async (id) => {
    const task = tasks.find((task) => task._id === id);
    const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      ...task,
      completed: !task.completed,
    });
    setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const editTask = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, { title: newTitle });
    setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task) => (
        <TaskItem 
          key={task._id} 
          task={task} 
          onToggle={toggleTask} 
          onDelete={deleteTask}
          onEdit={editTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
