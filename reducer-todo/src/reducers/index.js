
export const initialState = {
    todoArray: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
    ],
}

export const reducer = (state, action) => {
  console.log('reducer action', action)
    switch (action.type) {
        case "ADD_TODO":
          return {
            ...state,
            todoArray: [...state.todoArray, {
              item: action.payload,
              completed: false,
              id: Date.now()
            }]
          };
        default:
          return state;
    }
}
