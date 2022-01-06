import { Task, TaskModel } from '../models/TaskModel';



export const getTasks = async (req: any, res: any) => {
    res.send('Getting tasks');
};


export const postTask = (req: any, res: any) => {
    res.send('Posting task');
};