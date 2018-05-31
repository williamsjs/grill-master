import React from 'react';
import DraggableItem from './DraggableItem';

const DraggableList = ({items}) => {
  return (
    <div className="draggable-list">
      {items.map(item => <DraggableItem item={item} />)}
    </div>
  );
};

export default DraggableList;