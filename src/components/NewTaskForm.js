// NewTaskForm.js
import React, { useState } from 'react';



const NewTaskForm = ({ onTaskFormSubmit }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Code');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    onTaskFormSubmit({ text: task, category });
    setTask('');
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <label htmlFor="task">Details:</label>
      <input
        id="task"
        type="text"
        placeholder="New task details"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        aria-label="Details"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Code">Code</option>
        <option value="Food">Food</option>
        <option value="Money">Money</option>
        <option value="Misc">Misc</option>
      </select>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;