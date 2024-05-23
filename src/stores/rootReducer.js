import { combineReducers } from 'redux';
import exampleReducer from './exampleSlice';

const rootReducer = combineReducers({
  some: exampleReducer,
});

export default rootReducer;
