import React from 'react';

import TasksList from './Components/TasksList'
import { Task } from './Components/Task';


function App() {

  let tasks: Task[] = [
    { title: 'first task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()},
    { title: 'second task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()},
    { title: 'third task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()}
  ]

  return (
    <main>
      <h1>Hello React!</h1>
      <TasksList tasks={tasks} />
    </main>
  );
}

export default App;
