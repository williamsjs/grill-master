import React from 'react';
import Card from '../Card/Card';

const CardList = ({items}) => (
  <div className="card-list">
    {items.map(item => <Card key={item.id} name={item.name} />)}
  </div>
);

export default CardList;