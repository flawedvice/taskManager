import React, { useState, useEffect } from 'react';

import axios from 'axios';

import CreateTask from './Components/CreateTask';
import TasksList from './Components/TasksList'
import { Task } from './Components/SingleTask';



function App() {

  
  // Defining States
  const [ tasksList, setTasksList ] = useState<Task[]>([
    { title: 'first task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()},
    { title: 'second task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()},
    { title: 'third task', isCompleted: false, owner: 'Anonymous', createdAt: new Date()}
  ]);
  const [ taskInput, setTaskInput ] = useState<string>('task');

  const updateTasksList: string[] = [];

  // URL for API calls
  const baseUrl = 'http://localhost:8000/tasks';

  // Gets every task from server
  const getTasks = () => {
    axios.get(baseUrl + '/all')
      .then( res => {
        setTasksList(res.data);
      })
      .catch( error => {
        console.log(error);
      });
  };

  let calledPatch = false;
  // Toggle Tasks completed/pending states
  const checkTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let taskId = event.target.value;
    let task = tasksList.filter( (task: Task) => task._id === taskId)[0];
    const index = tasksList.indexOf(task);
    task.isCompleted = !task.isCompleted;
    updateTasksList.push(taskId);
    if (!calledPatch) {
      setTimeout(() => updateTasks(updateTasksList), 300);
      calledPatch = true;
    };

    setTasksList( (prevState): Task[] => {
      let left = prevState.slice(0,index);
      let right = prevState.slice(index+1,);
      return [...left, task, ...right];
    });
  };

  // Changes Input on every keystroke
  const changeInput = (event: React.FormEvent<HTMLInputElement>): void => {
    let input = event.currentTarget.value;
    setTaskInput(input);
  };

  // Sends post request to server with new task
  const createTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskInput === '') return // Do nothing;

    console.log(taskInput);

    axios.post(baseUrl+'/new-task', {
        title: taskInput,
        isCompleted: false,
      })
      .then(res => console.log(res))
      .then(getTasks)
      .catch(err => console.log(err));
    setTaskInput('');
  };

  const updateTasks = (taskIds: string[]) => {
    axios.patch(baseUrl + '/complete-task', taskIds)
        .then(res => {
          console.log(res);
          calledPatch = false;
        })
        .catch(err => console.log(err));
  };

  const deleteTask = (taskId: string) => {
    let task = tasksList.filter( (task: Task) => task._id === taskId)[0];
    const index = tasksList.indexOf(task);
    axios.delete(baseUrl + '/remove-task', {
      data:{
        id: taskId
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    setTasksList( (prevState): Task[] => {
      let left = prevState.slice(0,index);
      let right = prevState.slice(index+1,);
      return [...left, task, ...right];
    });
  };
  

  // Get Tasks List
  useEffect(() => {
    getTasks();
  }, []);


  return (
    <main>
      <h1>Hello React!</h1>
      <CreateTask taskInput={taskInput} onCreate={createTask} onInputChange={changeInput}/>
      <TasksList tasks={tasksList} onCheck={checkTask} deleteTask={deleteTask}/>
    </main>
  );
}

export default App;
