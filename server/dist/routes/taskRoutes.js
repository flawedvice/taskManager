"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const taskControllers_1 = require("../controllers/taskControllers");
/* || Main Routes */
// View Tasks
router.get('/tasks', taskControllers_1.getTasks);
// Create task
router.post('/new-task', taskControllers_1.postTask);
// Filter Tasks
router.get('/tasks/:filter/:value', taskControllers_1.filterTasks);
// Edit Task
// Complete Task
// Delete Task
module.exports = router;
