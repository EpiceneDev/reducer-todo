
export const initialState = {
    todos: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
    ]
}

export const reducer = (state, action) => {
  //console.log('reducer action', action)
    switch (action.type) {
        case "ADD_TODO":
          const newTodo = {
              item: action.payload,
              completed: false,
              id: Date.now()
            }
          return {
            todos: [...state.todos, newTodo]
          };
        case "COMPLETED_TODO":
            return {
              todos: state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                  return {
                    ...todo,
                    completed: true
                  };
                } else {
                  return todo
                }
              })
          };
        case "REMOVE_TODO":
          return {
            todos: state.todos.filter(todo => !todo.completed)
          };
        default:
          return state;
    }
}
