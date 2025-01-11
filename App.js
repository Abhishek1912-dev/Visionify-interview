import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './tasksSlice';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  console.log('App rendered');
  console.log('Tasks:', tasks);

  return (
    <div>
      <h1>TODO List</h1>
      {/* Other JSX */}
    </div>
  );
};

export default App;
