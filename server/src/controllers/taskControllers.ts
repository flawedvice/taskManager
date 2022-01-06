import { Task, TaskModel } from '../models/TaskModel';



export const getTasks = async (req: any, res: any) => {
    const tasks = await TaskModel.find({});
    console.log(tasks);
    
    res.send(JSON.stringify(tasks));
};


export const postTask = async (req: any, res: any) => {
    const taskData = req.body;
    const newTask = new TaskModel(taskData);

    try {
        newTask.save();
        res.json(newTask);
        
    } catch (error) {
        res.send('Couldn\'t create new task');
    }

};