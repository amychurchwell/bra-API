import { combineReducers } from 'redux';
import brandReducer from './brandReducer';

const rootReducer = combineReducers({
  brandsById: brandReducer
});

export default rootReducer;
