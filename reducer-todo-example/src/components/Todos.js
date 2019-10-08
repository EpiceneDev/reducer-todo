import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';

import Todo from './Todo';
import AddTodoForm from './AddTodoForm';

const Todos = () => {

    const [ { todos }, dispatch ] = useReducer(reducer, initialState);

    const AddNewTodo = todoText => {
        dispatch({ type: 'NEW_TODO', payload: todoText });
    }

    const completeTodo = todo => {
        dispatch({ type: 'COMPLETE_TODO', payload: todo });
    }

    const clearCompleted = () => {
        dispatch({ type: 'CLEAR_COMPLETED' });
    }

    return (
        <>
            <h1>Todos</h1>
            <ul style={{ 'listStyleType': 'none'}}>{todos.length === 0 ? 
                'Nothing to do, horray!' : 
                todos.map(todo => <Todo key={todo.id} todo={todo.item} complete={todo.completed} clicked={() => completeTodo(todo)}/>)}
            </ul>
            <AddTodoForm addNewTodo={AddNewTodo} />
            <button onClick={clearCompleted}>Clear Completed</button>
        </>
    );
};

export default Todos;