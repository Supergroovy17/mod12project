// src/reducers/someReducer.js

// Define the initial state at the top of the file
const initialState = {
    count: 0, // Example state property
  };
  
  // Reducer function
  const someReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  
  export default someReducer;
  