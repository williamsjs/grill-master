import { REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES, 
         UPDATE_RECIPE_REQ, UPDATE_RECIPE_RES, UPDATE_RECIPE
        } from '../constants/action-types';
import updatedRecipe from './updatedRecipe';

const initialState = {
  isFetching: false, 
  items: []
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ALL_RECIPES:
      return { ...state, isFetching: true };
    case RECEIVE_ALL_RECIPES:
      return { ...state, isFetching: false, items: action.recipes };
    case UPDATE_RECIPE_REQ:
    case UPDATE_RECIPE_RES:
    case UPDATE_RECIPE:
      return { ...state, items: updatedRecipe(state.items, action)};
    default:
      return state;
  }
};

export default recipes;