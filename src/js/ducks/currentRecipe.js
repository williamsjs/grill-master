import fetch from 'cross-fetch';
import appUrl from '../constants/appUrl';
import { createOptions } from '../localStorage';

const UPDATE_RECIPE = 'UPDATE_RECIPE';
const REQUEST_RECIPE = 'REQUEST_RECIPE';
const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
const UPDATE_CURRENT_RECIPE_REQ = 'UPDATE_CURRENT_RECIPE_REQ';
const UPDATE_CURRENT_RECIPE_RES = 'UPDATE_CURRENT_RECIPE_RES'
const UPDATE_CURRENT_RECIPE = 'UPDATE_CURRENT_RECIPE';
const ADD_INGREDIENT = 'ADD_INGREDIENT';
const ADD_INSTRUCTION = 'ADD_INSTRUCTION';

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

export const updateCurrentRecipe = (name, id) => {
  return {type: UPDATE_CURRENT_RECIPE, name: name, id: id}
}

export const updateCurrentRecipeReq = () => {
  return {type: UPDATE_CURRENT_RECIPE_REQ};
}

export const updateCurrentRecipeRes = () => {
  return {type: UPDATE_CURRENT_RECIPE_RES};
}

export function saveCurrentRecipe(name, id) {
  return function(dispatch) {
    dispatch(updateCurrentRecipeReq());
    const reqType = id ? 'PUT' : 'POST';
    const baseUrl = `${appUrl}/recipes/`;
    const url = id ? baseUrl + id : baseUrl;

    const formData = new FormData();
    formData.append('name', name);

    const options = createOptions({method: reqType, body: formData});
    const resp = fetch(url, options);

    if (id) {
      return resp.then(resp => dispatch(updateCurrentRecipeRes()));
    } else {
      return resp.then(res => res.json())
                  .then(json => {
                    dispatch(updateCurrentRecipe(json.name, json.id));
                    dispatch(updateCurrentRecipeRes());
                  });

    }
  }
}

export function addIngredient(ingredient) {
  return {type: ADD_INGREDIENT, name: ingredient};
}

export function addInstruction(instruction) {
  return {type: ADD_INSTRUCTION, name: instruction};
}

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
      return {...state, ingredients: state.ingredients.concat(action.name)};
    case ADD_INSTRUCTION:
      return {...state, instructions: state.instructions.concat(action.name)};
    default:
      return state;
  }
};
  
  export default currentRecipe;