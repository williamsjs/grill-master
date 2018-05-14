import { RECEIVE_RECIPE, REQUEST_RECIPE, UPDATE_CURRENT_RECIPE, UPDATE_CURRENT_RECIPE_REQ, UPDATE_CURRENT_RECIPE_RES, ADD_INGREDIENT } from '../constants/action-types';

const initialState = {
  ingredients: [],
  instructions: []
};

const currentRecipe = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPE:
      return {...state, fetching: true};
    case RECEIVE_RECIPE:
      return {...state, fetching: false, name: action.recipe.name, id: action.recipe.id};
    case UPDATE_CURRENT_RECIPE:
      return {...state, name: action.name, id: action.id, saved: false};
    case UPDATE_CURRENT_RECIPE_REQ:
      return {...state, saved: false};
    case UPDATE_CURRENT_RECIPE_RES:
      return {...state, saved: true};
    case ADD_INGREDIENT:
      return {...state, ingredients: state.ingredients.concat(action.name)}
    default:
      return state;
  }
};

export default currentRecipe;