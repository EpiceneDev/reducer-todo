import React from 'react';

import Todo from './Todo';

const todos = [{
    item: 'First Todo',
    completed: false,
    id: 1
}]

const Todos = () => {
    return (
        <>
            <h1>Todos</h1>
            <ul style={{ 'listStyleType': 'none'}}>{!todos ? 
                'Nothing to do, horray!' : 
                todos.map(todo => <Todo key={todo.id} todo={todo.item}/>)}</ul>
            <button>Clear Completed</button>
        </>
    );
};

export default Todos;