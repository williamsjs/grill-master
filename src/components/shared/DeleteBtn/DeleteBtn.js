import React from 'react';
import GoTrashcan from 'react-icons/lib/go/trashcan';
import './DeleteBtn.scss';

const DeleteBtn = ({onClick, style}) => (
  <GoTrashcan className="delete-btn" onClick={onClick} style={style}/>
);

export default DeleteBtn;