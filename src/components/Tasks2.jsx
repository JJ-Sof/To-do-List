import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';

const Task = ({ task, onChange, onDelete, startEdit, saveEdit, discardEdit}) => {

    const [editText, setEditText] = useState(task.text);
    const [originalText, setOriginalText] = useState(task.text);

    useEffect(() => {
        setEditText(task.text); 
        setOriginalText(task.text);
    }, [task.text]);

    const handleDelete = () => {
        onDelete(task.id);
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
                saveEdit(task.id, editText);
                setOriginalText(editText)
            }
        }
    }

    const handleBlur = () => {
        setEditText(originalText);
        discardEdit(task.id);
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
                        onChange={() => onChange(task.id)}
                        label={task.text}
                    />
                    {!task.completed && (
                        <button className='edit-button ml-auto' onClick={() => startEdit(task.id)}>Edit</button>
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