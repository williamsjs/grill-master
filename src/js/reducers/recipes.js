import { REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES, 
         UPDATE_RECIPE_REQ, UPDATE_RECIPE_RES, UPDATE_RECIPE,
         DELETE_RECIPE_RESP, REMOVE_DELETED_ALERT
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
    case DELETE_RECIPE_RESP:
      return { ...state, items: state.items.filter(item => item.id !== action.id), deleted: true };
    case REMOVE_DELETED_ALERT:
      return { ...state, deleted: false};
    case UPDATE_RECIPE_REQ:
    case UPDATE_RECIPE_RES:
    case UPDATE_RECIPE:
      return { ...state, items: updatedRecipe(state.items, action)};
    default:
      return state;
  }
};

export default recipes;