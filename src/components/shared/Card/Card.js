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
    return (
      <div className="card">
        <Dropzone style={{}}>
          <img className="card-image" src="https://picsum.photos/200/200" alt="no image display" />
        </Dropzone>
        <div className="card-body">
        <div className="card-title">
          <input type="text" onClick={this.editing(true)} value={this.props.item.name} onBlur={this.editing(false)} onChange={this.update()} />
        </div>
        </div>
      </div>
    );
  }
}

export default Card;