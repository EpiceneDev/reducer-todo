export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  };

export const todoReducer = (state, action) => {
    return (
        console.log("todoReducer state: ", state)
    )
}
