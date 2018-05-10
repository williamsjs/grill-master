import { RECEIVE_RECIPE, REQUEST_RECIPE } from '../constants/action-types';

const currentRecipe = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RECIPE:
      return {...state, fetching: true};
    case RECEIVE_RECIPE:
      return {...state, fetching: false, recipe: action.recipe};
    default:
      return state;
  }
};

export default currentRecipe;