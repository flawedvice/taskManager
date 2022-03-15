import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

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
    deleteTask: (taskId: string) => void
}


const SingleTask = (props: SingleTaskProps) => {
    let style:string;
    props.task.isCompleted ? style = "completed" : style = '';
    return (
        <article className="task">
            <div className="input-group">
                <input type="checkbox" id={props.task._id} onChange={event => props.onCheck(event)} value={props.task._id} checked={props.task.isCompleted}/>
                <label className={style} htmlFor={props.task._id}>{props.task.title}</label>
            </div>
            <FontAwesomeIcon icon={faTrashCan} className="icon" onClick={() => props.deleteTask(props.task._id!)}/>
        </article>
    );
};

export default SingleTask;