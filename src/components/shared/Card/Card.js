import React, { Component } from 'react';
import IoEdit from 'react-icons/lib/io/edit';
import { Link } from 'react-router-dom';
import './Card.scss';
import ImgUploader from '../ImgUploader/ImgUploader';
import InputEdit from '../InputEdit/InputEdit';

class Card extends Component {
  constructor(props) {
    super(props)

    this.update = this.update.bind(this);
    this.editing = this.editing.bind(this);
  }

  editing() {
    return e => {
      this.props.onBlur(this.props.item);
    };
  }

  update() {
    return e => {
      this.props.onChange(this.props.item.id, e.target.value);
    }
  }

  render() {
    const {item, linkToUrl} = this.props;

    return (
      <div className="card">
        <ImgUploader item={item} />
        <div className="card-body">
          <InputEdit text={item.name} onChange={this.update} onBlur={this.editing} />
          <Link to={linkToUrl}>  
            <button className="btn details-btn"><IoEdit /> Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;