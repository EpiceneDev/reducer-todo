import React, { useState } from 'react';

const TodoForm = props => {

    const [ todoText, setTodoText ] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        props.addNewTodo(todoText);
        setTodoText('');
    }

    const onChangeHandler = e => {
        setTodoText(e.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text' name='todo' placeholder='New Todo' value={todoText} onChange={onChangeHandler} />
            <button type='submit'>Add Todo</button>
        </form>
    )
};

export default TodoForm;