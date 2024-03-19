import * as action from './actionStyles'

export const addTask = (text) => ({
    type: action.ADD_TASK,
    payload: {
        text
    }
});

export const toggleTask = (taskId) => ({
    type: action.TOGGLE_TASK,
    payload: {
        taskId
    }
});

export const deleteTask = (taskId) => ({
    type: action.DELETE_TASK,
    payload: {
        taskId
    }
});

export const startEditTask = (taskId) => ({
    type: action.START_EDIT_TASK,
    payload: { 
        taskId 
    }
});
  
export const saveEditTask = (taskId, newText) => ({
    type: action.SAVE_EDIT_TASK,
    payload: { 
        taskId, 
        newText 
    }
});
  
export const discardEditTask = (taskId) => ({
    type: action.DISCARD_EDIT_TASK,
    payload: { 
        taskId 
    }
});

/*export const filterTasks = (filter) => ({
    type: action.SET_FILTER,
    payload: {
        filter
    }
})*/

export const clearTasks = () => ({
    type: action.CLEAR_TASKS
});
/*
export const clearInputField = () => ({
    type: 'CLEAR_INPUT_FIELD'
});
*/