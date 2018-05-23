import React from 'react';
import Draggable from 'react-draggable';

const WhatsHot = () => {
  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  const handleStart = () => {};

  const handleDrag = () => {};

  const handleStop = () => {};

  return (
      <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}>
        <div style={{background: 'blue'}}>
          <div className="handle" style={{color: 'white'}}>Drag from here</div>
          <div style={{color: 'white'}}>This readme is really dragging on...</div>
        </div>
      </Draggable>
  );
};

export default WhatsHot;