import React from 'react';
import './styles/DraggableColorBox.css';

const DraggableColorBox = ({ color, name, showFull }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`DraggableColorBox ${showFull && 'showFull'}`}
    >
      {name}
    </div>
  );
};

export default DraggableColorBox;
