import { combineReducers } from 'redux';
import menuToggle from './ducks/menuToggle';
import recipes from './ducks/recipes';
import currentRecipe from './ducks/currentRecipe';
import user from './ducks/user';

const rootReducer = combineReducers({menuToggle, recipes, currentRecipe, user});

export default rootReducer;