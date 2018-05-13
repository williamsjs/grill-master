import React from 'react';
import GoTrashcan from 'react-icons/lib/go/trashcan';
import './DeleteBtn.scss';

const DeleteBtn = ({onClick}) => (
  <button className="delete-btn" onClick={onClick}>
    <GoTrashcan />
  </button>
);

export default DeleteBtn;