import React from 'react';

const Task = ({ task, onChange }) => {
    return (
        <div>
            <input
                type = "checkbox"
                checked = {task.completed}
                onChange = {onChange(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
        </div>
    )
}

export default Task;