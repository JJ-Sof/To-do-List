
    /*
    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    }

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    }

    const handleStartEditTask = (taskId) => {
        dispatch(startEditTask(taskId));
    }

    const handleSaveEditTask = (taskId, newText) => {
        dispatch(saveEditTask(taskId, newText));
    }

    const handleDiscardEditTask = (taskId) => {
        dispatch(discardEditTask(taskId));
    }

    
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');

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

    */