import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask, startEditTask, saveEditTask, discardEditTask } from '../redux/actions'

import Form from 'react-bootstrap/Form';

const Task = ({ task }) => {

    const dispatch = useDispatch();
    const [editText, setEditText] = useState(task.text);
    const [originalText, setOriginalText] = useState(task.text);

    useEffect(() => {
        setEditText(task.text); 
        setOriginalText(task.text);
    }, [task.text]);

    const handleToggleTask = () => {
        dispatch(toggleTask(task.id));
    }

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEditChange = (e) => {
        setEditText(e.target.value)
    }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            if (editText.trim() === '') {
                handleDelete();
            }
            else {
                dispatch(saveEditTask(task.id, editText));
                setOriginalText(editText)
            }
        }
    }

    const handleBlur = () => {
        setEditText(originalText);
        dispatch(discardEditTask(task.id));
    }

    return (
        <div className='task-display'>
            {task.isEditing ? (
                <input
                    type="text"
                    className='task-edit-input'
                    value={editText}
                    onChange={handleEditChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <>
                    <Form.Check
                        className={`custom-checkbox  ${task.completed ? 'completed-task' : 'incomplete-task'}`}
                        type="checkbox"
                        checked={task.completed}
                        onChange={handleToggleTask}
                        label={task.text}
                    />
                    {!task.completed && (
                        <button className='edit-button ml-auto' onClick={() => startEditTask(task.id)}>Edit</button>
                    )}
                </>
            )}
            
            {task.completed && (
                <button className="delete-btn ml-auto" onClick={handleDelete}>x</button>
            )}
        </div>
    );
};

export default Task;