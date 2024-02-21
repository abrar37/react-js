import './App.css'
import { Provider } from 'react-redux'
import {store} from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <Provider store={store}>
      <h1 className="text-3xl font-bold">
        Todos
      </h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
