import { combineReducers } from 'redux';
import { TOGGLE_MENU } from '../constants/action-types';

const menuOpen = (state = false, action) => {
  return !state;
}

const rootReducer = combineReducers({menuOpen});

export default rootReducer;