import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/index';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
 
  
  
 
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  )
} 
export default App;
