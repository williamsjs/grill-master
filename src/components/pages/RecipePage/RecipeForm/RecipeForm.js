import React from 'react';
import Dropzone from 'react-dropzone'
import './RecipeForm.scss';

const RecipeForm = ({onClick, recipe, updateCurrentRecipe}) => {

  const updateRecipe = e => {
    updateCurrentRecipe(e.target.value);
  };

  return (
    <div className="recipe-form">
      <div className="form-group">
        <div className="form-column title-col">
          <input type="text" className="col-header inline-edit" onChange={updateRecipe} value={recipe.name || 'Enter Recipe Name'} />
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