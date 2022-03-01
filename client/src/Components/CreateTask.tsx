import React from "react";

interface CreateTaskProps {
    onCreate: (event: React.FormEvent<HTMLFormElement>) => void,
    onInputChange: (event: React.FormEvent<HTMLInputElement>) => void,
    taskInput: string
}

const CreateTask = (props: CreateTaskProps) => {
    return (
        <form onSubmit={e => props.onCreate(e)}>
            <input 
                type="text" 
                id="create-input" 
                value={props.taskInput} 
                onChange={e => props.onInputChange(e)}
                autoComplete="off"
            />
            <button type="submit" id="create-btn">Create</button>
        </form>
    );
};

export default CreateTask;