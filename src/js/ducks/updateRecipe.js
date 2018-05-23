import fetch from 'cross-fetch';
import appUrl from '../constants/appUrl';
import { createOptions } from '../utilities/createOptions';

export const UPDATE_RECIPE_REQ = 'UPDATE_RECIPE_REQ';
export const UPDATE_RECIPE_RES = 'UPDATE_RECIPE_RES';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';

const reviseRecipe = (id, newVal) => ({type: UPDATE_RECIPE,  id: id, newVal: newVal});
const saveRecipeRequest = id => ({type: UPDATE_RECIPE_REQ, id: id});
const saveRecipeResponse = id => ({type: UPDATE_RECIPE_RES, id: id});

export function saveRecipe(recipe) {
  return function(dispatch) {
    dispatch(saveRecipeRequest(recipe.id));
    const formData = new FormData();
    formData.append('name', recipe.name);
    const options = createOptions({method: 'PUT', body: formData});

    return fetch(`${appUrl}/recipes/${recipe.id}`, options)
            .then(response => dispatch(saveRecipeResponse(recipe)))
            .catch(e => console.log(e));
  }
}

export const updateRecipe = (state, action) => {
  switch (action.type) {
    case UPDATE_RECIPE_REQ:
      return state.map(item => {
        return action.id === item.id ? {...item, isUpdating: true} : item
      });
    case UPDATE_RECIPE_RES:
      return state.map(item => {
        return action.id === item.id ? {...item, isUpdating: false, name: action.name} : item
      });
    case UPDATE_RECIPE:
      return state.map(item => {
        return action.id === item.id ? {...item, name: action.newVal} : item
      });
    default:
      return state;
  };
};
