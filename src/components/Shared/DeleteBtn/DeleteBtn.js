import React from 'react';
import GoTrashcan from 'react-icons/lib/go/trashcan';
import './DeleteBtn.scss';

const DeleteBtn = ({onClick}) => (
  <GoTrashcan className="delete-btn" onClick={onClick} />
);

export default DeleteBtn;