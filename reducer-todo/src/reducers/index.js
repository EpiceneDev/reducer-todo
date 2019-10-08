
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
  //console.log('reducer action', action)
    switch (action.type) {
        case "ADD_TODO":
            return {
              ...state,
              item: action.payload,
              completed: false,
              id: Date.now()
            };
        case "TOGGLE_COMPLETED":
            return {
              ...state,
              completed: !state.completed
            };
        case "REMOVE_TODO":
          return {
            ...state,
            item: { ...state.item, item: state.item.filter((todo) => todo.id !== action.payload.id)},
          };
        default:
          return state;
    }
}
