import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(task._id, editTitle);
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id)}
      />
      {isEditing ? (
        <input 
          type="text" 
          value={editTitle} 
          onChange={(e) => setEditTitle(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
