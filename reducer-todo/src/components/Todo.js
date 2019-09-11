// import React, { useReducer, useState } from 'react';
// import { todoReducer, initialState } from '../reducers';

// const Todo = () => {
  
//   const [newTask, setNewTask] = useState();

//   const handleChanges = e => {
//     setNewTask(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     props.addTask(newTask)
//   }

//   return (
//     <div>
//       {!state.editing ? (
//         <h1>
//           {state.item}{" "}
//           <button
//             className="far fa-edit"
//             onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
//           />
//         </h1>
//       ) : (
//         <div>
//           <input
//             className="title-input"
//             type="text"
//             name="NewTask"
//             value={taskList}
//             onChange={handleChanges}
//           />
//           <button
//             onClick={() => {
//               dispatch({ type: "UPDATE_TASK", payload: setTaskList(taskList) });
//               setNewTask("");
//             }}
//           >
//             Update task
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Todo;