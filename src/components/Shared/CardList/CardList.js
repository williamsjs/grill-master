import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = ({children}) => (
  <div className="card-list">
    {children}
  </div>
);

export default CardList;