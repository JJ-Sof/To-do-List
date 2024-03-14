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

    const renderedTasks = tasks.map(task => (
        <Task key = {task.id} task = {task} onChange={toggleTask} onDelete={deleteTask}/>
    ));

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
            </form>
            <div className="task-columns">
                <div className="task-column">
                    {renderedTasks.slice(0, Math.ceil(tasks.length / 2))}
                </div>
                <div className="task-column">
                    {renderedTasks.slice(Math.ceil(tasks.length / 2))}
                </div>
            </div>
        </div>
    );
}

export default TaskList;