"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: String,
    isCompleted: { type: Boolean, required: true },
    category: String,
    owner: { type: String, default: 'Anonymous' },
    createdAt: { type: Date, default: new Date() }
});
exports.TaskModel = (0, mongoose_1.model)('Task', TaskSchema);
