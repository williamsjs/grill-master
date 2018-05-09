import { REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES, 
         UPDATE_RECIPE_REQ, UPDATE_RECIPE_RES, EDITING_RECIPE,
         UPDATE_RECIPE
        } from '../constants/action-types';

const initialState = {
  isFetching: false, 
  items: []
};

const updatedRecipe = (state, action) => {
  switch (action.type) {
    case UPDATE_RECIPE_REQ:
      return state.map(item => {
        return action.id === item.id ? {...item, isUpdating: true} : item
      });
    case UPDATE_RECIPE_RES:
      return state.map(item => {
        return action.id === item.id ? {...item, isUpdating: false, name: action.name} : item
      });
    case EDITING_RECIPE:
      return state.map(item => {
        return action.id === item.id ? {...item, edited: action.editing} : item
      });
    case UPDATE_RECIPE:
      return state.map(item => {
        return action.id === item.id ? {...item, name: action.newVal} : item
      });
    default:
      return state;
  };
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ALL_RECIPES:
      return { ...state, isFetching: true };
    case RECEIVE_ALL_RECIPES:
      return { ...state, isFetching: false, items: action.recipes };
    case UPDATE_RECIPE_REQ:
    case UPDATE_RECIPE_RES:
    case EDITING_RECIPE:
    case UPDATE_RECIPE:
      return { ...state, items: updatedRecipe(state.items, action)};
    default:
      return state;
  }
};

export default recipes;