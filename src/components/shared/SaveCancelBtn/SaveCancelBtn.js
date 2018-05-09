import React from 'react';
import MdCancel from 'react-icons/lib/md/cancel';

const SaveCancelBtn = ({onClick}) => {
  return (
    <div className="btn-group">    
      <button className="btn watermelon" onClick={onClick(false)}><MdCancel /></button>
      <button className="btn ocean" onClick={onClick(false)}>Save</button>
    </div>
  );
};

export default SaveCancelBtn;