// components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id = "ipt"
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button id = "addtask" type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
