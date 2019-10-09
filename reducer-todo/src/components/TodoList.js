import React, { useReducer } from 'react';
import { initialState, reducer } from "../reducers";
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [ { todos }, dispatch ] = useReducer(reducer, initialState);

    const addTodo = todoText => {
      dispatch({ 
        type: 'ADD_TODO',
        payload: todoText
      })
  }

    const markDone = todo => {
      dispatch({
        type: "COMPLETED_TODO",
        payload: todo
      })
    }

    const deleteTodo = () => {
      dispatch({
          type: "REMOVE_TODO"
      })
  }
  


    return (
        <div>
            <h2>Todo List via Reducer</h2>
            <ul style={{ 'listStyleType': 'none'}}>{todos.length === 0 ? 
                'Nothing to do, horray!' : 
                todos.map(todo => <Todo key={todo.id} todo={todo.item} complete={todo.completed} clicked={() => markDone(todo)}/>)}
            </ul>
            {/* <ul style={{ 'listStyleType': 'none'}}>
              {Array.from(todos).length === 0 ?
                'Everything Done!' :
                Array.from(todos).map(todo => {
                  return <li><p onClick={markDone} className={todo.completed ? 'complete' : ''}>{todo}</p></li>
                })
              }
            </ul> */}
            <TodoForm addTodo={addTodo} />
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
};

export default TodoList;