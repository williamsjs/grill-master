import { combineReducers } from 'redux';
import { TOGGLE_MENU } from '../constants/action-types';
import menuOpen from './menuOpen';
import recipes from './recipes';

const rootReducer = combineReducers({menuOpen, recipes});

export default rootReducer;