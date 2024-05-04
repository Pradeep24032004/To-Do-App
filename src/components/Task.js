// components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <input id="chkbx"
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span id = "txt" className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button id = "dlt" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
