import { createStore, combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import dogsReducer from './reducers/dogsReducer';

const rootReducer = combineReducers({
  dogs: dogsReducer,
  user: userReducer
});

export default createStore(rootReducer);
