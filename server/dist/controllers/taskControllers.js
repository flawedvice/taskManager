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
exports.postTask = exports.getTasks = void 0;
const TaskModel_1 = require("../models/TaskModel");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield TaskModel_1.TaskModel.find({});
    console.log(tasks);
    res.send(JSON.stringify(tasks));
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
