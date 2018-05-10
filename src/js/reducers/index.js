import { combineReducers } from 'redux';
import { TOGGLE_MENU } from '../constants/action-types';
import menuOpen from './menuOpen';
import recipes from './recipes';
import currentRecipe from './currentRecipe';

const rootReducer = combineReducers({menuOpen, recipes, currentRecipe});

export default rootReducer;