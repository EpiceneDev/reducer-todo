import React from 'react';

const Todo = ({ todo, complete, clicked }) => {
    return <li><p onClick={clicked} className={complete ? 'complete' : ''}>{todo}</p></li>
}

export default Todo;