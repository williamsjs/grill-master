import React, { Component } from 'react';
import './Card.scss';

const Card = ({isEditing, item, onBlur, onChange}) => {
  const editing = (edit) => {
    return e => {
      e.stopPropagation();
      isEditing(item, edit);
    };
  }

  return (
    <div className="card" onClick={editing(false)} >
      <img className="card-image" src="https://picsum.photos/200/200" alt="no image display" />
      <div className="card-body">
        {!item.edited ? (
          <h3 className="card-title" onClick={editing(true)} >
            {item.name}
          </h3>
        ) : (
          <div>
            <input type="text" onClick={e => e.stopPropagation()} value={name} onChange={onChange} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;