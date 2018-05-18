import { combineReducers } from 'redux';
import { TOGGLE_MENU } from '../constants/action-types';
import menuOpen from './menuOpen';
import recipes from './recipes';
import currentRecipe from './currentRecipe';
import user from '../ducks/user';

const rootReducer = combineReducers({menuOpen, recipes, currentRecipe, user});

export default rootReducer;