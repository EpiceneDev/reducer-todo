export const initialState ={
    todos: [
        {
            item: 'First Todo',
            completed: false,
            id: 1
        },
        {
            item: 'Second Todo',
            completed: false,
            id: 2
        },
        {
            item: 'Third Todo',
            completed: false,
            id: 3
        }
    ] 
};

export const reducer = (state, action) => {
    switch(action.type) {
        case 'NEW_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                todos: [ ...state.todos, newTodo ]
            };
        case 'COMPLETE_TODO':
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: true
                        };
                    } else {
                        return todo;
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                todos: state.todos.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
}