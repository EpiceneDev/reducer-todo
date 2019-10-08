import React, { useState, useReducer } from 'react';
import { initialState, reducer } from "../reducers";


const TodoForm = ({dispatch, state}) => {
    const [item, setItem] = useState("");

    const handleChange = event => setItem(event.target.value);

    const addTodo = e => {
        e.preventDefault();
        dispatch({
          type: "ADD_TODO", 
          payload: item
        })
    }
  
    const deleteTodo = e => {
        e.preventDefault();
        dispatch({
            type: "REMOVE_TODO",
            payload: state.completed
        })
    }
    

    return(
        <form>
            <input 
                type="text" 
                name="item" 
                placeholder="Task" 
                value={item}
                onChange={handleChange} />
            <button onClick={() => {
                    dispatch({ type: "UPDATE_TODO", payload: item });
                    setItem("");
                }}>Add Task</button>
            <button onClick={() => {
                    dispatchEvent({ type: "REMOVE_TODO", payload: item });
                }}>Delete</button>
        </form>
    );
};

export default TodoForm;