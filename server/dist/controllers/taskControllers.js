"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.completeTask = exports.editTask = exports.filterTasks = exports.postTask = exports.getTasks = void 0;
const TaskModel_1 = require("../models/TaskModel");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield TaskModel_1.TaskModel.find({});
    console.log(tasks);
    res.json(tasks);
});
exports.getTasks = getTasks;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskData = req.body;
    const newTask = new TaskModel_1.TaskModel(taskData);
    try {
        newTask.save();
        res.json(newTask);
    }
    catch (error) {
        res.send('Couldn\'t create new task');
    }
});
exports.postTask = postTask;
const filterTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.params.filter;
    let value = req.params.value;
    if (filter === 'title' || filter === 'category') {
        value = new RegExp(`${value}`, 'i');
    }
    const tasks = yield TaskModel_1.TaskModel.find({ [filter]: value }).exec();
    res.json(tasks);
});
exports.filterTasks = filterTasks;
const editTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.body.id;
    const modifiedFields = req.body.modifiedFields;
    const modifiedTask = yield TaskModel_1.TaskModel.findByIdAndUpdate(taskId, modifiedFields);
    if (modifiedTask !== null) {
        yield modifiedTask.save()
            .then(() => {
            res.json({ 'message': 'Task updated successfully!' });
        })
            .catch(error => {
            console.log(error);
            res.json({ 'message': 'We were unable to modify the task' });
        });
    }
    else {
        res.json({ 'message': 'There is no such task' });
    }
});
exports.editTask = editTask;
const completeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.body.id;
    const task = yield TaskModel_1.TaskModel.findById(taskId);
    if (task !== null) {
        let value = !(task === null || task === void 0 ? void 0 : task.isCompleted);
        task.isCompleted = value;
        try {
            task.save();
            console.log('Task modified successfully!');
            res.json({ 'message': `Task is now ${task.isCompleted ? 'completed!' : 'pending!'}` });
        }
        catch (error) {
            console.log(error);
            res.json({ 'message': 'We were unable to modify the task' });
        }
    }
    else {
        res.json({ 'message': 'There is no such task.' });
    }
});
exports.completeTask = completeTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.body.id;
    yield TaskModel_1.TaskModel.findByIdAndDelete(taskId)
        .then(() => {
        console.log('Task deleted successfully!');
        res.json({ 'message': 'Task deleted successfully!' });
    })
        .catch(error => {
        console.log(error);
        res.json({ 'message': 'We were unable to delete the task :(' });
    });
});
exports.deleteTask = deleteTask;
