import {
   TOGGLE_MENU, REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES, 
   UPDATE_RECIPE_REQ, UPDATE_RECIPE, EDITING_RECIPE
  } from '../constants/action-types';
import fetch from 'cross-fetch';

export const toggleMenu = () => ({type: TOGGLE_MENU});

export const requestAllRecipes = () => ({type: REQUEST_ALL_RECIPES});

export const saveRecipeRequest = (id) => ({type: UPDATE_RECIPE_REQ, id: id});

export const updateRecipe = (item) => ({type: UPDATE_RECIPE,  id: item.id});

export const editingRecipe = (item, editing) => ({type: EDITING_RECIPE, id: item.id, editing: editing})

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

    return fetch(`https://grillmaster.herokuapp.com/recipes`)
      .then(response => response.json())
      .then(json => dispatch(receiveAllRecipes(json)));
  };
};

export function saveRecipe(recipe) {
  return function(dispatch) {
    dispatch(saveRecipeRequest(recipe.id));

    return fetch(
      `https://grillmaster.herokuapp.com/recipes/${recipe.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({name: recipe.name})
      }
    )
    .then(response => dispatch(saveRecipeResponse(recipe)));
  }
}

