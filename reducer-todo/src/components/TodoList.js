import React, { useReducer } from 'react';

const TodoList = ({ todoArray }) => {
    return (
        <div>
            Todo List
            {todoArray.map(todo => <div key={todo.id}>{todoArray.item}</div>)}
        </div>
    )
};

export default TodoList;