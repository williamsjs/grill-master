import {
   TOGGLE_MENU, REQUEST_ALL_RECIPES, RECEIVE_ALL_RECIPES, 
   UPDATE_RECIPE_REQ, UPDATE_RECIPE, UPDATE_RECIPE_RES,
   RECEIVE_RECIPE, REQUEST_RECIPE, UPDATE_CURRENT_RECIPE,
   ADD_RECIPE_REQUEST, ADD_RECIPE_RESPONSE
  } from '../constants/action-types';
import fetch from 'cross-fetch';

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

    return fetch(`https://grillmaster.herokuapp.com/recipes`)
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
      `https://grillmaster.herokuapp.com/recipes/${recipe.id}`,
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

    return fetch(`https://grillmaster.herokuapp.com/recipes/${id}`)
      .then(res => res.json())
      .then(json => dispatch(receiveRecipe(json)));
  }
}

export const updateCurrentRecipe = (name) => {
  return {type: UPDATE_CURRENT_RECIPE, name: name}
}

const addRecipeRequest = () => ({type: ADD_RECIPE_REQUEST});
const addRecipeResponse = id => ({type: ADD_RECIPE_RESPONSE, id: id});

export function addRecipe() {
  return function(dispatch, getState) {
    const recipe = getState().currentRecipe
    const reqType = recipe.id ? 'PUT' : 'POST';
    const baseUrl = `https://grillmaster.herokuapp.com/recipes/`;
    const url = recipe.id ? baseUrl + recipe.id : baseUrl;

    dispatch(addRecipeRequest());

    const formData = new FormData();
    formData.append('name', recipe.name);

    return fetch(
      url,
      { 
        method: reqType,
        body: formData
      }
    )
    .then(res => res.json())
    .then(json => console.log(json));
  }
}


