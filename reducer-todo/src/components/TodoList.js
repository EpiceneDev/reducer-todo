import React from 'react';

const TodoList = ({ todoArray }) => {
    return (
        <div>
            <h2>Todo List via Redux</h2>
            {todoArray.map(todo => <div key={todo.id}>{todoArray.item}</div>)}
        </div>
    )
};

export default TodoList;