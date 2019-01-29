const initialState = {
  dogs: [],
  user: null
}

function rootReducer (state = initialState, action) {
  switch(action.type) {
    case 'FETCHED_DOGS':
      return { ...state, dogs: action.dogs }
    default:
      return state
  }
}

export default rootReducer;
