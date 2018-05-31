import React from 'react';
import Dropzone from 'react-dropzone';
import MainInput from '../../../shared/MainInput/MainInput';
import DeleteBtn from '../../../shared/DeleteBtn/DeleteBtn';
import { AddIngredient, AddInstruction } from './AddItems';
import DraggableList from '../../../shared/DraggableList';
import './RecipeForm.scss';

const RecipeForm = ({onClick, recipe, onChange, onSubmit, ingredients, instructions}) => {
  return (
    <form onSubmit={onSubmit} className="recipe-form">

      {recipe.id && 
        <DeleteBtn onClick={onClick} />
      }
      
      <div className="form-group">
        <div className="form-column title-col">
          <MainInput onChange={onChange} value={recipe.name} placeholder={'Enter Recipe Name'} />
          <Dropzone className="drop-zone">
            <p>Image goes here :)</p>
          </Dropzone>
        </div>
        <div className="form-column ingredients">
          <h1 className="col-header">Ingredients</h1>
          <AddIngredient placeholder={"ingredient"} />
          <DraggableList items={recipe.ingredients} />
        </div>
        <div className="form-column instructions">
          <h1 className="col-header">Instructions</h1>
          <AddInstruction placeholder={"instruction"} />
          <DraggableList items={recipe.instructions} />
        </div>
      </div>
      <div className="center">
        <button className="btn bs-success" type="submit">Save</button>
      </div>
    </form>
  );
};

export default RecipeForm;