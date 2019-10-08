import React, { useReducer } from 'react';
import { initialState, reducer } from "../reducers";

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = (item) => {
        dispatch({
          type: "ADD", 
          payload: item
        })
      }

    return (
        <div>
            <h2>Todo List via Redux</h2>
            <ul>
             {state.todoArray.map(todo => <li key={todo.id}>{todo.item}</li>)}
            </ul>
        </div>
    )
};

export default TodoList;