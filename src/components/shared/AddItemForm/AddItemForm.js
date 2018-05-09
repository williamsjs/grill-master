import React from 'react';
import './AddItemForm.scss';

const AddItemForm = () => {
  return (
    <form className="add-item" onSubmit={e => e.preventDefault()} >
      <label>Recipe Name</label>
      <input type="text" id="recipe-name" />
      <button className="btn" type="submit">Add</button>
    </form>
  );
};

export default AddItemForm;