
export const initialState = {
    todoList: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
]}

export const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_EDITING":
          return {
            ...state,
            editing: !state.editing
          };
        case "ADD_TASK":
          return {
            ...state,
            newTask
            editing: !state.editing,
            task: action.payload
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
