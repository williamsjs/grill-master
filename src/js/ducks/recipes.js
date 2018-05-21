import fetch from 'cross-fetch';
import { createOptions } from '../localStorage';
import { UPDATE_RECIPE_REQ, UPDATE_RECIPE_RES, UPDATE_RECIPE } from './updateRecipe';
import appUrl from '../constants/appUrl';

const REQUEST_ALL_RECIPES = 'REQUEST_ALL_RECIPES';
const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
const DELETE_RECIPE_RESP = 'DELETE_RECIPE_RESP';
const REMOVE_DELETED_ALERT = 'REMOVE_DELETED_ALERT';

const requestAllRecipes = () => ({type: REQUEST_ALL_RECIPES});
const receiveAllRecipes = recipes => {
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes: recipes,
    receiveDate: Date.now()
  };
};

export function fetchRecipes() {
  return function(dispatch) {
    dispatch(requestAllRecipes());

    const options = createOptions();

    return fetch(`${appUrl}/recipes`, options)
      .then(response => response.json())
      .then(json => dispatch(receiveAllRecipes(json)));
  };
};

const deleteRecipeResponse = id => ({type: DELETE_RECIPE_RESP, id: id});
const removeDeletedAlert = () => ({type: REMOVE_DELETED_ALERT});

export function deleteRecipe(id) {
  return function(dispatch) {

    const options = createOptions({method: 'DELETE'});

    return fetch(`${appUrl}/recipes/${id}`, options)
    .then(resp => {
      dispatch(deleteRecipeResponse(id));
      setTimeout(() => dispatch(removeDeletedAlert()), 1500);
    });
  }
}

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
      return { ...state, items: updateRecipe(state.items, action)};
    default:
      return state;
  }
};

export default recipes;