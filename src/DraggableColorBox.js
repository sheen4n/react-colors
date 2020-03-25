import React from 'react';
import './styles/DraggableColorBox.css';

const DraggableColorBox = ({ color, showFull }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`DraggableColorBox ${showFull && 'showFull'}`}
    >
      {color}
    </div>
  );
};

export default DraggableColorBox;
