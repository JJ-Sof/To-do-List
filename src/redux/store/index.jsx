import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
    tasks: tasksFromLocalStorage
};
//console.log(initialState)

const store = configureStore({ 
    reducer: rootReducer,
    preloadedState: initialState,
    enhancer: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;