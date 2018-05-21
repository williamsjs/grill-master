import { connect } from 'react-redux';
import { addIngredient, addInstruction } from '../../../../js/ducks/currentRecipe';
import AddItemGen from '../../../generators/AddItemGen';

export const AddIngredient = connect()(AddItemGen(addIngredient, 'ingredient'));
export const AddInstruction = connect()(AddItemGen(addInstruction, 'instruction'));