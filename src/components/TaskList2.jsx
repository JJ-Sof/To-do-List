import React, {useState, useEffect} from 'react';
import Task from './Tasks2';

const TaskList = () => {

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');
    const [showDropDown, setShowDropDown] = useState(false);

    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? {...task, completed: !task.completed} : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const addTask = (e) => {
        e.preventDefault();
        const text1 = newTask.trim();
        if (text1 != ''){
            const newlyAddedTask = {
                id: Date.now(),
                text: text1,
                completed: false,
                isEditing: false
            };
            setTasks([...tasks, newlyAddedTask]);
            localStorage.setItem('tasks', JSON.stringify([...tasks, newlyAddedTask]));
            setNewTask('');
        }
    }

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id != taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const startEditTask = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? {...task, isEditing: true} : {...task, isEditing: false}
        );
        setTasks(updatedTasks);
    }

    const saveEditTask = (taskId, newText) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? {...task, text: newText, isEditing: false} : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('task', JSON.stringify(updatedTasks));
    }

    const discardEditTask = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? {...task, isEditing: false} : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('task', JSON.stringify(updatedTasks));
    }

    const clearList = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    }

    const filterTasks = (selectedFilter) => {
        setFilter(selectedFilter);
        setShowDropDown(false);
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
            <form onSubmit = {addTask}>
                <div className='add-task-container'>
                    <input
                        type="text"
                        value={newTask}
                        className='task-input'
                        onChange= {(e) => setNewTask(e.target.value)} 
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
                        <Task key={task.id} task={task} onChange={toggleTask} onDelete={deleteTask} startEdit={startEditTask} saveEdit={saveEditTask} discardEdit={discardEditTask}/>
                    ))}
                </div>
                <div className="task-column">
                    {rightColumnTasks.map(task => (
                        <Task key={task.id} task={task} onChange={toggleTask} onDelete={deleteTask} startEdit={startEditTask} saveEdit={saveEditTask} discardEdit={discardEditTask}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaskList;