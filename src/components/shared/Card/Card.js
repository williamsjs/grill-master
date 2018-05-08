import React from 'react';
import './Card.scss';

const Card = ({name}) => (
  <div className="card">
    <img className="card-image" src="https://picsum.photos/200/300" alt="no image display" />
    <h1 className="card-title">{name}</h1>
    {name}
  </div>
);

export default Card;