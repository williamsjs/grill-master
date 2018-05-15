import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../../../../js/actions/index';
import AddBtn from '../../../shared/AddBtn/AddBtn';

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
      <input ref={node => input = node} type="text" placeholder="ingredient" />
      <AddBtn />
    </form>
  );
};

const Ingredient = connect()(ConnectedIngredient);

export default Ingredient;