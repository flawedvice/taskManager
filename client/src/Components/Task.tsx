

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
    task: Task
}


const SingleTask = (props: SingleTaskProps) => {
    return (
        <article>
            <input type="checkbox" />
            <h3>{props.task.title}</h3>
        </article>
    );
};

export default SingleTask;