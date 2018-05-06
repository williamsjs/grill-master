import { combineReducers } from 'redux';
import { TOGGLE_MENU } from '../constants/action-types';
import { menuOpen } from './menuOpen';

const rootReducer = combineReducers({menuOpen});

export default rootReducer;