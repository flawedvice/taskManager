"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const taskControllers_1 = require("../controllers/taskControllers");
/* || Main Routes */
// View Tasks
router.get('/tasks/all', taskControllers_1.getTasks);
// Create task
router.post('/tasks/new-task', taskControllers_1.postTask);
// Filter Tasks
router.get('/tasks/:filter/:value', taskControllers_1.filterTasks);
// Edit Task
router.put('/tasks/edit-task', taskControllers_1.editTask);
// Complete Task
router.patch('/tasks/complete-task', taskControllers_1.completeTask);
// Delete Task
router.delete('/tasks/remove-task', taskControllers_1.deleteTask);
module.exports = router;
