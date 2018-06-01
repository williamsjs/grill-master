import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { XYCoord } from 'dnd-core';

const styles = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  background: 'white',
  cursor: 'move',
  color: 'black'
}

const itemSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
     };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const itemTarget = {
  hover(props, monitor, component) {

  }
}

class SourceDraggableItem extends Component {
  render() {
    const {item, isDragging, connectDragSource} = this.props;
    const opacity = isDragging ? 0 : 1;
    
    return connectDragSource(
      <li className="draggable-item" style={{...styles, opacity}} >{item}</li>
    );
  }
};

const DraggableItem = DragSource('recipes', itemSource, collect)(SourceDraggableItem);
export default DraggableItem;