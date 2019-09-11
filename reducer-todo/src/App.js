import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers'
import TodoList from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import './App.css';

function App() {
 const [todos, dispatch] = useReducer(todoReducer, initialState);
  
  const addTodo = (item) => {
    dispatch({
      type: "ADD_TODO", 
      payload: item
    })
  }
 
  return (
    <div className="App">
      <TodoForm />
      <TodoList addItem={addItem} />
    </div>
  )
} 
export default App;
