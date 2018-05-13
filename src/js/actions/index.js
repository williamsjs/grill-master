import {
   TOGGLE_MENU, REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES, 
   UPDATE_RECIPE_REQ, UPDATE_RECIPE, UPDATE_RECIPE_RES,
   RECEIVE_RECIPE, REQUEST_RECIPE, UPDATE_CURRENT_RECIPE,
   DELETE_RECIPE_REQ, DELETE_RECIPE_RESP
  } from '../constants/action-types';
import fetch from 'cross-fetch';
import appUrl from '../constants/appUrl';

export const toggleMenu = () => ({type: TOGGLE_MENU});

export const requestAllRecipes = () => ({type: REQUEST_ALL_RECIPES});

export const saveRecipeRequest = id => ({type: UPDATE_RECIPE_REQ, id: id});

export const saveRecipeResponse = id => ({type: UPDATE_RECIPE_RES, id: id});

export const updateRecipe = (id, newVal) => ({type: UPDATE_RECIPE,  id: id, newVal: newVal});

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

    return fetch(`${appUrl}/recipes`)
      .then(response => response.json())
      .then(json => dispatch(receiveAllRecipes(json)));
  };
};

export function saveRecipe(recipe) {
  return function(dispatch) {
    const formData = new FormData();
    formData.append('name', recipe.name);

    dispatch(saveRecipeRequest(recipe.id));

    return fetch(
      `${appUrl}/recipes/${recipe.id}`,
      {
        method: 'PUT',
        body: formData
      }
    )
    .then(response => dispatch(saveRecipeResponse(recipe)))
    .catch(e => console.log(e));
  }
}

const requestRecipe = () => ({type: REQUEST_RECIPE});
const receiveRecipe = recipe => ({type: RECEIVE_RECIPE, recipe: recipe});

export function getRecipe(id) {
  return function(dispatch) {
    dispatch(requestRecipe());

    return fetch(`${appUrl}/recipes/${id}`)
      .then(res => res.json())
      .then(json => dispatch(receiveRecipe(json)));
  }
}

export const updateCurrentRecipe = (name) => {
  return {type: UPDATE_CURRENT_RECIPE, name: name}
}

export function saveCurrentRecipe(name, id) {
  return function(dispatch) {
    const reqType = id ? 'PUT' : 'POST';
    const baseUrl = `${appUrl}/recipes/`;
    const url = id ? baseUrl + id : baseUrl;

    const formData = new FormData();
    formData.append('name', name);

    return fetch(
      url,
      { 
        method: reqType,
        body: formData
      }
    );
  }
}

const deleteRecipeRequest = () => ({type: DELETE_RECIPE_REQ});
const deleteRecipeResponse = (id) => ({type: DELETE_RECIPE_RESP, id: id});

export function deleteRecipe(id) {
  return function(dispatch) {

    return fetch(
      `${appUrl}/recipes/${id}`,
      { 
        method: 'DELETE'
      }
    )
    .then(resp => dispatch(deleteRecipeResponse(id)));
  }
}



