import { RECEIVE_RECIPE, REQUEST_RECIPE, UPDATE_CURRENT_RECIPE } from '../constants/action-types';

const currentRecipe = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RECIPE:
      return {...state, fetching: true};
    case RECEIVE_RECIPE:
      return {...state, fetching: false, name: action.recipe.name, id: action.recipe.id};
    case UPDATE_CURRENT_RECIPE:
      return {...state, name: action.name};
    default:
      return state;
  }
};

export default currentRecipe;