import React, {useState} from 'react';
import Task from './Tasks2';

const TaskList = () => {

    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        setNewTask(e.target.value);
    }

    return (
        <div>
            <form onSubmit = {addTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={addTask}
                    placeholder='Add a task'
                />
                <button type="submit">Add Task</button>
            </form>

        </div>
    );
}

export default TaskList;