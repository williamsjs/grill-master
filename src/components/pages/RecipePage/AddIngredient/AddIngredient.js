import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../../../../js/actions/index';

const ConnectedIngredient = ({dispatch}) => {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!input.value.trim()) {
      return;
    }

    dispatch(addIngredient(input.value));
    input.value = '';
  };

  return (
    <form onSubmit={handleSubmit} >
      <input ref={node => input = node} type="text" />
      <button class="btn" type="submit">Add Ingredient</button>
    </form>
  );
};

const Ingredient = connect()(ConnectedIngredient);

export default Ingredient;