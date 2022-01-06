const router = require('express').Router();

import { getTasks, postTask } from '../controllers/taskControllers';


/* || Main Routes */

// View Tasks
router.get('/tasks', getTasks);

// Create task
router.post('/new-task', postTask);

// Filter Tasks

// Edit Task

// Complete Task

// Delete Task



module.exports = router;