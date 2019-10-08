import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';

import Todo from './Todo';

const Todos = () => {

    const [ { todos }, dispatch ] = useReducer(reducer, initialState);

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