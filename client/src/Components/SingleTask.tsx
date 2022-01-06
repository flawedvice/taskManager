

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
    return (
        <article>
            <input type="checkbox" onChange={event => props.onCheck(event)} value={props.task._id}/>
            <h3>{props.task.title}</h3>
        </article>
    );
};

export default SingleTask;