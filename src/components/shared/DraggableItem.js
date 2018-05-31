import React, { Component } from 'react';
import { DragSource, DragDropContext} from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    return { };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class SourceDraggableItem extends Component {
  render() {
    const {item, isDragging, connectDragSource} = this.props;
    return connectDragSource(
      <li style={isDragging ? {display: 'none'} : {}} >{item}</li>
    );
  }
};

const DraggableItem = DragSource('recipes', itemSource, collect)(SourceDraggableItem);
export default DraggableItem;