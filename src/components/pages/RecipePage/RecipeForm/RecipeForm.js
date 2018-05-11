import React from 'react';
import Dropzone from 'react-dropzone'
import MainInput from '../../../Shared/MainInput/MainInput';
import './RecipeForm.scss';

const RecipeForm = ({onClick, recipe, onChange}) => {
  return (
    <div className="recipe-form">
      <div className="form-group">
        <div className="form-column title-col">
          <MainInput onChange={onChange} value={recipe.name} placeholder={'Enter Recipe Name'} />
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
      <div className="center">
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default RecipeForm;