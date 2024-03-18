import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Tasks2';
import { addTask, clearTasks } from '../redux/actions';

const TaskList = () => {

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const [newTaskText, setNewTaskText] = useState('');
    const [filter, setFilter] = useState('all');

    const handleAddTask = (e) => {
        e.preventDefault();
        const text1 = newTaskText.trim();
        if (text1 !== ''){
            dispatch(addTask(text1));
            setNewTaskText('');
        }
    }

    const clearList = () => {
        dispatch(clearTasks());
    }

    const handleChange = (e) => {
        setNewTaskText(e.target.value);
    }
    
    const filterTasks = (selectedFilter) => {
        setFilter(selectedFilter);
    }
    
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all'){
            return true;
        }
        else if (filter === 'completed'){
            return task.completed;
        }
        else if (filter === 'incomplete'){
            return !task.completed;
        }
    })

    const leftColumnTasks = [];
    const rightColumnTasks = [];
    filteredTasks.forEach((task, index) => {
        if (index % 2 === 0) {
            leftColumnTasks.push(task);
        } else {
            rightColumnTasks.push(task);
        }
    });

    return (
        <div className="task-list-container">
            <form onSubmit = {handleAddTask}>
                <div className='add-task-container'>
                    <input
                        type="text"
                        value={newTaskText}
                        className='task-input'
                        onChange= {handleChange} 
                        placeholder='Add a task'
                    />
                    <button type="submit">Add Task</button>
                    <button className='clear-button' onClick={clearList}>Clear tasks</button>
                    <div className='drop-down'>
                        <select className = 'drop-down-menu' value={filter} onChange={(e) => filterTasks(e.target.value)}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="incomplete">Incomplete</option>
                        </select>
                    </div>
                </div>
                
            </form>
            <div className="task-columns">
                <div className="task-column">
                    {leftColumnTasks.map(task => (
                        <Task key={task.id} task={task}/>
                    ))}
                </div>
                <div className="task-column">
                    {rightColumnTasks.map(task => (
                        <Task key={task.id} task={task}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaskList;