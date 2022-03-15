import SingleTask, { Task } from './SingleTask';


export interface  TasksListProps {
    tasks: Task[],
    onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
    deleteTask: (taskId: string) => void
};


const TasksList = (props: TasksListProps) => {
    return (
        <section className="task-list">
            {
                props.tasks.map( (task: Task) => <SingleTask key={task._id} task={task} onCheck={props.onCheck} deleteTask={props.deleteTask}/>)    
            }
        </section>
    );
};

export default TasksList;