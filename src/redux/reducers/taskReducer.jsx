import { toggleTask } from '../actions';
import * as actions from '../actions/actionStyles'


const taskReducer = (state  = {tasks: []}, action) => {
    let updatedTasks = [];
    //console.log(state.tasks);
    switch(action.type) {
        case actions.ADD_TASK:
            console.log(state.tasks);
            const {text} = action.payload;
            const newlyAddedTask = {
                id: Date.now(),
                text: text,
                completed: false,
                isEditing: false
            };
            console.log(state.tasks);
            updatedTasks = [...state.tasks, newlyAddedTask];
            console.log(state.tasks)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        case actions.TOGGLE_TASK:
            updatedTasks = state.tasks.map(task => 
                task.id === action.payload.taskId ? {...task, completed: !task.completed} : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        case actions.DELETE_TASK:
            updatedTasks = state.tasks.filter(task => task.id !== action.payload.taskId)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        case actions.START_EDIT_TASK:
            updatedTasks = state.tasks.map(task => 
                task.id === action.payload.taskId ? {...task, isEditing: true} : {...task, isEditing: false}
            )
            console.log(updatedTasks);
            return {
                ...state,
                tasks: updatedTasks
            };
        case actions.SAVE_EDIT_TASK:
            const {taskId, newText} = action.payload;
            console.log(taskId + " " + newText);
            updatedTasks = state.tasks.map(task => 
                task.id === taskId ? {...task, text: newText} : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        case actions.DISCARD_EDIT_TASK:
            updatedTasks = state.tasks.map(task => 
                task.id === action.payload ? {...task, isEditing: false} : task
            )
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        /*case actions.SET_FILTER:
            return{
                ...state, 
                filter: action.payload
            }*/
        case actions.CLEAR_TASKS:
            localStorage.removeItem('tasks');
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
}

export default taskReducer;