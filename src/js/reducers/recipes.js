import { REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES } from '../constants/action-types';

const recipes = (
  state = { isFetching: false, items: []},
  action
) => {
  switch (action.type) {
    case REQUEST_ALL_RECIPES:
      return { ...state, isFetching: true };
    case RECEIVE_ALL_RECIPES:
      return { ...state, isFetching: false, items: action.recipes };
    default: 
      return state;
  }
}