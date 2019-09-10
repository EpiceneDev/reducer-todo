import React from 'react';
import TodoItem from './components/TodoItem';

import './App.css';

function App() {
  const addTodo = (item) => dispatch({type: "ADD_ITEM", value={item} payload: item})
  return (
    <div className="App">
     <TodoItem />
    </div>
  );
}

export default App;
