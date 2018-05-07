import { REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES } from '../constants/action-types';

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
    default:
      return state;
  }
};

export default recipes;