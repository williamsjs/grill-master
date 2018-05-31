import React from 'react';
import DraggableItem from './DraggableItem';

const DraggableList = ({items}) => {
  return (
    items.map(item => <DraggableItem item={item} />)
  );
};

export default DraggableList;