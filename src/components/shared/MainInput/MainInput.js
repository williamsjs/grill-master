import React from 'react';
import './MainInput.scss';

const MainInput = ({onChange, value, placeholder}) => {
  return (
    <input type="text" 
        className="inline-edit"
        onChange={onChange} 
        value={value} 
        placeholder={placeholder} 
        required
    />
  );
};

export default MainInput;