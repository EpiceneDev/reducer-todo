import React, { useState } from 'react';


const TodoForm = props => {
    const [todoText, setTodoText] = useState("");

    const handleChange = e => setTodoText(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        props.addTodo(todoText);
        setTodoText('');
    }
  
   

    return(
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                name="todo" 
                placeholder="New Todo" 
                value={todoText}
                onChange={handleChange} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;