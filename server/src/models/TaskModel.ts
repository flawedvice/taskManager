import { Schema, model } from "mongoose";

export type Task = {
    _id?: string,
    title: string,
    description?: string,
    isCompleted: boolean,
    category?: string,
    owner: string,
    createdAt: Date,
}; 

const TaskSchema = new Schema<Task>({
    title: { type: String, required: true },
    description: String,
    isCompleted: { type: Boolean, required: true},
    category: String,
    owner: { type: String, default: 'Anonymous'},
    createdAt: { type: Date, default: new Date() }
});

export const TaskModel = model<Task>('Task', TaskSchema);
