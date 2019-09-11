import React, { useReducer } from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log("TodoList props: ", props);
    return (
        <div>
            {props.state.map(item => {
            <Todo 
                key={item.id}
                item={item}
                state={props.state}
            />})}
        </div>
    )
};

export default TodoList;