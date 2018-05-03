import { combineReducers } from 'redux';
import { TOGGLE_MENU } from '../constants/action-types';

const menuOpen = (state = true, action) => {
  return !state;
}

const rootReducer = combineReducers({menuOpen});

export default rootReducer;