import { connect } from 'react-redux';
import { addIngredient, addInstruction } from '../../../../js/ducks/currentRecipe';
import AddItem from '../../../shared/AddItem';

const itemDispatch = actionCreator => (
  dispatch => ({addItem: newVal => dispatch(actionCreator(newVal))})
);

export const AddIngredient = connect(null, itemDispatch(addIngredient))(AddItem);
export const AddInstruction = connect(null, itemDispatch(addInstruction))(AddItem);