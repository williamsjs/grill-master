import React from 'react';
import IoIosArrowBack from 'react-icons/lib/io/ios-arrow-back';

const BackButton = ({goBack}) => {
  return (
    <button onClick={goBack} className="btn">
      <IoIosArrowBack />&nbsp; Back
    </button>
  );
};

export default BackButton;