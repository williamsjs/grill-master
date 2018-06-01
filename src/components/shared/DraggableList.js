import React, { Component } from 'react';
import DraggableItem from './DraggableItem';

class DraggableList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="draggable-list">
        {items.map((item, i) => <DraggableItem item={item} key={i} id={i} index={i} />)}
      </div>
    );
  }
}

export default DraggableList;