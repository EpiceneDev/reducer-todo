import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/index';
import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
import './App.css';

function App() {
 
  const [state, dispatch] = useReducer(reducer, initialState);
  
 
  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
      {/* <TodoForm dispatch={dispatch} /> */}
    </div>
  )
} 
export default App;
