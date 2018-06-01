import React from 'react';
import AddBtn from '../shared/AddBtn/AddBtn';

const AddItem = ({addItem, placeholder}) => {
  let input;

  const handleEvent = e => {
    if (((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') && input.value.trim()) {
      e.preventDefault();
      addItem(input.value);
      input.value = '';
    }
  }

  return (
    <div>
      <input style={{height: '30px', marginLeft: '40px', width: '200px'}} ref={node => input = node} onKeyPress={handleEvent} type="text" placeholder={placeholder} />
      <AddBtn onClick={handleEvent} />
    </div>
  );
};

export default AddItem;

