const initialState = {
  dogs: [],
  user: null
}

function rootReducer (state = initialState, action) {
  switch(action.type) {
    case 'FETCHED_DOGS':
      return { ...state, dogs: action.dogs }
    case 'ADD_DOG':
      // let newDogs = state.dogs.concat(action.dog)
      // return { ...state, dogs: newDogs }
      console.log(action)
      return { ...state, dogs: [...state.dogs, action.dog] }
    default:
      return state
  }
}

export default rootReducer;
