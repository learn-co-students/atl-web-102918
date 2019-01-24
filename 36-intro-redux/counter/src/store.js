import { createStore } from 'redux';

// A reducer is a function that updates the store
// by taking an oldState and an action and producing
// the desired newState.
let initialState = { count: 0, message: "" }

const reducer = (oldState = initialState, action) => {
  console.log("Inside Reducer", oldState, action)
  switch(action.type) {
    case "ADD_ONE":
      return { ...oldState, count: oldState.count + 1 }
    case "SUB_ONE":
      return { ...oldState, count: oldState.count - 1 }
    // If I don't know how to handle the action, pass back the oldState
    // otherwise my future state will be undefined and everything breaks
    default:
      return oldState
  }
}

const store = createStore(reducer);

export default store;
