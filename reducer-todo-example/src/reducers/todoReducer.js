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
            }
        default:
            return state;
    }
}