import React, { Component } from 'react';
import './Card.scss';

const Card = ({isEditing, item, onBlur, onChange}) => {

  const editing = (editMode) => {
    return e => {
      e.stopPropagation();
      isEditing(item, editMode);
    };
  }

  const update = () => {
    return e => {
      onChange(item.id, e.target.value);
    }
  }

  return (
    <div className="card">
      <img className="card-image" src="https://picsum.photos/200/200" alt="no image display" />
      <div className="card-body">
        {!item.edited ? (
          <h3 className="card-title" onClick={editing(true)} >
            {item.name}
          </h3>
        ) : (
          <div>
            <input type="text" onClick={e => e.stopPropagation()} value={item.name} onBlur={editing(false)} onChange={update()} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;