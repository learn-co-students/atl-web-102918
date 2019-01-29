export default function (state = [], action) {
  switch(action.type) {
    case 'FETCHED_DOGS':
      return action.dogs
    case 'ADD_DOG':
      // let newDogs = state.dogs.concat(action.dog)
      // return { ...state, dogs: newDogs }
      return [...state.dogs, action.dog]
    default:
      return state
    }
}
