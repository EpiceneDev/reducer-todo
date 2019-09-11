import React, { useReducer } from 'react';
// import Todo from './Todo';

const TodoList = ({ todoArray }) => {
    return (
        <div>
            Todo List
            {todoArray.map(todo => <div key={todo.id}>{todoArray.item}</div>)}
        </div>
    )
};

export default TodoList;