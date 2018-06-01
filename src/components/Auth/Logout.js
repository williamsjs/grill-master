import React from 'react';
import IoLogOut from 'react-icons/lib/io/log-out';

const Logout = ({navigate}) => {
  return (
    <div className="logout-container" onClick={navigate}>
      <IoLogOut />
    </div>
  );
};

export default Logout;{}