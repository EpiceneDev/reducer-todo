import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';

import Todo from './Todo';
import AddTodoForm from './AddTodoForm';

const Todos = () => {

    const [ { todos }, dispatch ] = useReducer(reducer, initialState);

    const AddNewTodo = todoText => {
        dispatch({ type: 'NEW_TODO', payload: todoText });
    }

    return (
        <>
            <h1>Todos</h1>
            <ul style={{ 'listStyleType': 'none'}}>{!todos ? 
                'Nothing to do, horray!' : 
                todos.map(todo => <Todo key={todo.id} todo={todo.item}/>)}
            </ul>
            <AddTodoForm addNewTodo={AddNewTodo} />
            <button>Clear Completed</button>
        </>
    );
};

export default Todos;