import { useState, useEffect } from 'react';

import axios from 'axios';

import TasksList from './Components/TasksList'
import { Task } from './Components/SingleTask';



function App() {

  // Defining States
  const [ tasksList, setTasksList ] = useState<Task[]>([
    { title: 'first task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()},
    { title: 'second task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()},
    { title: 'third task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()}
  ]);


  // Get Tasks List
  const baseUrl = 'http://localhost:8000/tasks';

  useEffect(() => {
    axios.get(baseUrl + '/all')
      .then( async (res) => {
        console.log(res.data);
        setTasksList(res.data);
      })
      .catch( error => {
        console.log(error);
      });
  }, []);


  // Toggle Tasks completed/pending states
  const checkTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let task = tasksList.filter( (task: Task) => task._id === event.target.value)[0];
    const index = tasksList.indexOf(task);
    task.isCompleted = !task.isCompleted;
    setTasksList( (prevState): Task[] => {
      let left = prevState.slice(0,index);
      let right = prevState.slice(index+1,);
      return [...left, task, ...right];
    });
  };
  

  return (
    <main>
      <h1>Hello React!</h1>
      <TasksList tasks={tasksList} onCheck={checkTask}/>
    </main>
  );
}

export default App;
