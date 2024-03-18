import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css'
import TaskList from './components/TaskList2'

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
        <h1>To-Do-List</h1>
        <TaskList/>
      </div>
    </Provider>
  )
}

export default App
