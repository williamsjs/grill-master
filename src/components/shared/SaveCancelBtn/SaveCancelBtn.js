import React from 'react';
import MdCancel from 'react-icons/lib/md/cancel';
import './SaveCancelBtn.scss';

const SaveCancelBtn = ({onClick}) => {
  return (
    <div className="btn-group">    
      <button className="btn cancel" onClick={onClick(false)}><MdCancel /></button>
      <button className="btn save" onClick={onClick(false)}>Save</button>
    </div>
  );
};

export default SaveCancelBtn;