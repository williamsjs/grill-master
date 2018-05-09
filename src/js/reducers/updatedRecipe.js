import {  UPDATE_RECIPE_REQ, UPDATE_RECIPE_RES, UPDATE_RECIPE } from '../constants/action-types';

const updatedRecipe = (state, action) => {
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

  export default updatedRecipe;