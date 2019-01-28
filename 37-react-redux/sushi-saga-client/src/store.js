import { createStore } from 'redux';
import sushiData from './sushi_data';

const defaultState = {
  sushi: sushiData,
  eaten: [],
  budget: 100
}

// store.dispatch({ type: 'EAT_SUSHI', sushi: myData })

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "EAT_SUSHI":
      let newState = {
        ...state,
        eaten: state.eaten.concat(action.sushi),
        budget: state.budget - action.sushi.price
      }
      console.log(newState)
      return newState
    default:
      return state
  }
}

export default createStore(rootReducer);
