import React from 'react';
import IoPlusCircled from 'react-icons/lib/io/plus-circled';

const AddBtn = ({text, onClick}) => {
  return (
    <button className="btn watermelon" onClick={onClick} ><IoPlusCircled />{text}</button>
  );
};

export default AddBtn;