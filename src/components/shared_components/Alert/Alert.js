import React from 'react';

const Alert = ({visible, className, children}) => {
  const styles = {
    padding: '10px', marginTop: '10px', marginBottom: '10px', borderRadius: '5px'
  }
  if (visible) {
    return (
      <div className={className} 
       style={styles}>{children}</div>
    );
  } else {
    return null;
  }
};

export default Alert;