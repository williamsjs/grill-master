import React from 'react';
import Card from '../Card/Card';

const CardList = ({items}) => (
  items.map(item => <Card key={item.id} name={item.name} />)
);

export default CardList;