import React from 'react';
import IoPlusCircled from 'react-icons/lib/io/plus-circled';
import './AddBtn.scss';

const AddBtn = ({text, onClick}) => {
  return (
    <button className="add-btn" onClick={onClick} ><IoPlusCircled />{text}</button>
  );
};

export default AddBtn;