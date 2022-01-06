const router = require('express').Router();

import { 
    getTasks,
    postTask,
    filterTasks
} from '../controllers/taskControllers';


/* || Main Routes */

// View Tasks
router.get('/tasks', getTasks);

// Create task
router.post('/new-task', postTask);

// Filter Tasks
router.get('/tasks/:filter/:value', filterTasks);

// Edit Task

// Complete Task

// Delete Task



module.exports = router;