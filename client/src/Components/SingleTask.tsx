

export interface Task {
    _id?: string,
    title: string,
    description?: string,
    isCompleted: boolean,
    category?: string,
    owner: string,
    createdAt: Date
};

interface SingleTaskProps {
    task: Task,
    onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const SingleTask = (props: SingleTaskProps) => {
    let style:string;
    props.task.isCompleted ? style = "completed" : style = '';
    return (
        <article>
            <input type="checkbox" id={props.task._id} onChange={event => props.onCheck(event)} value={props.task._id}/>
            <label className={style} htmlFor={props.task._id}>{props.task.title}</label>
        </article>
    );
};

export default SingleTask;