import { Task, TaskModel } from '../models/TaskModel';



export const getTasks = async (req: any, res: any) => {
    const tasks = await TaskModel.find({}).sort('-createdAt');
    console.log(tasks);
    
    res.json(tasks);
};



export const postTask = async (req: any, res: any) => {
    const taskData = req.body;
    const newTask = new TaskModel(taskData);

    try {
        newTask.save();
        res.json(newTask);
        console.log(newTask);
        
        
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



export const editTask = async (req: any, res: any) => {
    const taskId = req.body.id;
    const modifiedFields = req.body.modifiedFields;
    const modifiedTask = await TaskModel.findByIdAndUpdate(taskId, modifiedFields);

    if (modifiedTask !== null) {

        await modifiedTask.save()
            .then(() => {
                res.json({'message': 'Task updated successfully!'});
            })
            .catch( error => {
                console.log(error);
                res.json({'message': 'We were unable to modify the task'});
            });
    }
    else {
        res.json({'message': 'There is no such task'});
    }
        
};



export const completeTask = async (req: any, res: any) => {
    const taskId = req.body.data.id;
    console.log(req.body);
    
    console.log(`Got task Id: ${taskId}`);
    
    const task = await TaskModel.findById(taskId);
    if (task !== null) {
        let value = !task?.isCompleted;
        task.isCompleted = value;
        
        try {
            task.save();
            console.log('Task modified successfully!');
            res.json({'message': `Task is now ${task.isCompleted ? 'completed!' : 'pending!'}`});

        } catch (error) {
            console.log(error);
            res.json({'message': 'We were unable to modify the task'});
            
        }
    }
    else {
        res.json({'message': 'There is no such task.'})
    }
};



export const deleteTask = async (req: any, res: any) => {
    const taskId = req.body.id;
    await TaskModel.findByIdAndDelete(taskId)
        .then(() => {
            console.log('Task deleted successfully!');
            res.json({'message': 'Task deleted successfully!'});
        })
        .catch( error => {
            console.log(error);
            res.json({'message': 'We were unable to delete the task :('});
        })
};