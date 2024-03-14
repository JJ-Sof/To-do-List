import React from 'react';
import Form from 'react-bootstrap/Form';

const Task = ({ task, onChange, onDelete }) => {
    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <div className='task-display'>
            <Form.Check
                className={`custom-checkbox  ${task.completed ? 'completed-task' : ''}`}
                type="checkbox"
                checked={task.completed}
                onChange={() => onChange(task.id)}
                label={task.text}
            />
            {task.completed && (
                <button className="delete-btn ml-auto" onClick={handleDelete}>x</button>
            )}
        </div>
    );
};

export default Task;