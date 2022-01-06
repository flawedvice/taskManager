import SingleTask, { Task } from './SingleTask';


export interface  TasksListProps {
    tasks: Task[],
    onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
};


const TasksList = (props: TasksListProps) => {
    return (
        <section>
            {
                props.tasks.map( (task: Task) => <SingleTask key={task._id} task={task} onCheck={props.onCheck}/>)    
            }
        </section>
    );
};

export default TasksList;