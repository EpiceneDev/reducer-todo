import React, { useReducer } from 'react';
import { initialState, reducer } from "../reducers";

const TodoList = ({dispatch, state}) => {

    const markDone = e => {
      e.preventDefault();
      dispatch({
        type: "TOGGLE_COMPLETED"
      })
    }

    return (
        <div>
            <h2>Todo List via Reducer</h2>
            <ul>
              {state.map(todo => {
                <li key={todo.id} onClick={markDone}>{todo.item}</li>
              })}
            </ul>
        </div>
    )
};

export default TodoList;