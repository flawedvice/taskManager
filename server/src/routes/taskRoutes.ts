const router = require('express').Router();

import { 
    getTasks,
    postTask,
    filterTasks,
    deleteTask,
    completeTask,
    editTask
} from '../controllers/taskControllers';


/* || Main Routes */

// View Tasks
router.get('/tasks/all', getTasks);

// Create task
router.post('/tasks/new-task', postTask);

// Filter Tasks
router.get('/tasks/:filter/:value', filterTasks);

// Edit Task
router.put('/tasks/edit-task', editTask);

// Complete Task
router.patch('/tasks/complete-task', completeTask);


// Delete Task
router.delete('/tasks/remove-task', deleteTask);


module.exports = router;