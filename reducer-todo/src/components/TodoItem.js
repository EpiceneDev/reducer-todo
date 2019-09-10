import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const TodoItem = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [taskList, setTaskList] = useState([]);

  const handleChanges = e => {
    setTaskList(...state, item: e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.item}{" "}
          <button
            className="far fa-edit"
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="NewTask"
            value={taskList}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_TASK", payload: setTaskList(taskList) });
              setNewTask("");
            }}
          >
            Update task
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;