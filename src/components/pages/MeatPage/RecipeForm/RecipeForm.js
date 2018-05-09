import React from 'react';
import Dropzone from 'react-dropzone'
import './RecipeForm.scss';
import SaveCancelBtn from '../../../shared/SaveCancelBtn/SaveCancelBtn';

const RecipeForm = ({onClick}) => {
  return (
    <div className="recipe-form">
      <SaveCancelBtn onClick={onClick} />
      <div className="form-group">
        <div className="form-column title-col">
          <h1 className="col-header">Recipe Name</h1>
          <input type="text" id="recipe-name" />
          <Dropzone className="drop-zone">
            <p>Image goes here :)</p>
          </Dropzone>
        </div>
        <div className="form-column ingredients">
          <h1 className="col-header">Ingredients</h1>
        </div>
        <div className="form-column instructions">
          <h1 className="col-header">Instructions</h1>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;