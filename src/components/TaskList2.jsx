import React, {useState, useEffect} from 'react';
import Task from './Tasks2';

const TaskList = () => {

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

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

    const clearList = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    }

    const leftColumnTasks = [];
    const rightColumnTasks = [];
    tasks.forEach((task, index) => {
        if (index % 2 === 0) {
            leftColumnTasks.push(task);
        } else {
            rightColumnTasks.push(task);
        }
    });

    return (
        <div className="task-list-container">
            <form onSubmit = {addTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange= {(e) => setNewTask(e.target.value)} 
                    placeholder='Add a task'
                />
                <button type="submit">Add Task</button>
                <button className='clear-button' onClick={clearList}>Clear tasks</button>
            </form>
            <div className="task-columns">
                <div className="task-column">
                    {leftColumnTasks.map(task => (
                        <Task key={task.id} task={task} onChange={toggleTask} onDelete={deleteTask} />
                    ))}
                </div>
                <div className="task-column">
                    {rightColumnTasks.map(task => (
                        <Task key={task.id} task={task} onChange={toggleTask} onDelete={deleteTask} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaskList;