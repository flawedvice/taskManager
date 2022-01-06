import SingleTask, { Task } from './Task';


export interface  TasksListProps {
    tasks: Task[]
};


const TasksList = (props: TasksListProps) => {
    return (
        <section>
            {
                props.tasks.map( (task: any) => <SingleTask key={task._id} task={task}/>)    
            }
        </section>
    );
};

export default TasksList;