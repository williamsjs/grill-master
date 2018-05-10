import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = { editMode: false };

    this.update = this.update.bind(this);
    this.editing = this.editing.bind(this);
  }

  editing(editMode) {
    return e => {
      this.setState({editMode: editMode});
      this.props.onBlur(this.props.item);
    };
  }

  update() {
    return e => {
      this.props.onChange(this.props.item.id, e.target.value);
    }
  }

  render() {
    const {item, editItem} = this.props;

    return (
      <div className="card">
        <Dropzone style={{}}>
          <img className="card-image" src="https://picsum.photos/200/200" alt="no image display" />
        </Dropzone>
        <div className="card-body">
          <div className="card-title">
            <input type="text" className="inline-edit" onClick={this.editing(true)} value={item.name} onBlur={this.editing(false)} onChange={this.update()} />
          </div>
          <button className="btn details-btn" onClick={editItem(item.id)} >Edit Details</button>
        </div>
      </div>
    );
  }
}

export default Card;