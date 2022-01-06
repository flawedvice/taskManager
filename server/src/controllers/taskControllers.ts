import { Task, TaskModel } from '../models/TaskModel';



export const getTasks = async (req: any, res: any) => {
    const tasks = await TaskModel.find({});
    console.log(tasks);
    
    res.json(tasks);
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


export const filterTasks = async (req: any, res: any) => {
    const filter: 'title' | 'isCompleted' | 'category' = req.params.filter;
    let value = req.params.value;

    if (filter === 'title' || filter === 'category') {
        value = new RegExp(`${value}`,'i');
    }

    const tasks = await TaskModel.find({ [filter]: value }).exec();
    res.json(tasks)
};