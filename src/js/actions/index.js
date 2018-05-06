import { TOGGLE_MENU, REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES } from '../constants/action-types';
import fetch from 'cross-fetch';

export const toggleMenu = () => ({type: TOGGLE_MENU});
export const requestAllRecipes = () => ({type: REQUEST_ALL_RECIPES});
export const receiveAllRecipes = (json) => {
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes: json,
    receiveDate: Date.now()
  };
};

export function fetchRecipes() {
  return function(dispatch) {
    dispatch(requestAllRecipes());

    return fetch(`http://localhost:3000/recipes`)
      .then(
        response => response.json()
      )
      .then(json => 
        dispatch(receiveAllRecipes(json))
      );
  };
};

