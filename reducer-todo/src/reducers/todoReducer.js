
export const initialState = {
    data: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
]}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_EDITING":
          return {
            ...state,
            editing: !state.editing
          };
        case "UPDATE_TASK":
          return {
            ...state,
            editing: !state.editing,
            task: action.payload
          };
        default:
          return state;
      }
}
