import React from 'react';
import IoPlusCircled from 'react-icons/lib/io/plus-circled';

const AddBtn = ({text}) => {
  return (
    <button className="btn watermelon"><IoPlusCircled />{text}</button>
  );
};

export default AddBtn;