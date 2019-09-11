import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers'
import TodoList from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import './App.css';

function App() {
 const [state, dispatch] = useReducer(reducer, initialState);
  
  const addTodo = (item) => {
    dispatch({
      type: "ADD_TODO", 
      payload: item
    })
  }
 
  return (
    <div className="App">
      <TodoList todoArray={state.todoArray} />
      <TodoForm addTodo={addTodo} />
    </div>
  )
} 
export default App;
