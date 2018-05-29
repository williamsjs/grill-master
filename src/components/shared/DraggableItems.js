import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DraggableItems = ({items}) => {
  return (
    <DragDropContext>
      <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          {items.map((item, index) => (
            <Draggable key={index} draggableId={index}>
              {(provided, snapshot) => (
                <p ref={provided.innerRef} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{display: 'block'}}>{item}</p>
              )}
            </Draggable>
          ))}
        </div>
      )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableItems;